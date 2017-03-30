import moment from 'moment'

import api from '../api'
import { addErrors } from './errors'
import { setSnackbarMessage } from './snackbarMessage'
import { closeLogActionModal } from './logActionModal'
import { startRequest, endRequest } from './requests'

export function createUserAction (data, official, settings) {
  const params = Object.assign({}, data, {
    representative: {
      ocdDivisionIdentifier: official.office.divisionId,
      officeName: official.office.name,
      name: official.name
    }
  })

  return (dispatch, getState) => {
    const state = getState()

    dispatch(startRequest())

    if (state.auth) {
      api.userActions.create(params, state.auth)
        .then((json) => {
          dispatch(setSnackbarMessage('Action logged'))
          dispatch(closeLogActionModal())
          dispatch(fetchUserActionsForOfficial(official, settings))
          dispatch(endRequest())
        })
        .catch((err) => {
          dispatch(addErrors('userActionForm', err))
          setSnackbarMessage('There was a problem logging that action')
          dispatch(endRequest())
        })
    }
  }
}

export function fetchUserActionsForOfficial (official, settings) {
  return (dispatch, getState) => {
    const state = getState()

    if (state.auth) {
      const query = {
        representative: {
          ocdDivisionIdentifier: official.office.divisionId,
          officeName: official.office.name,
          name: official.name
        },
        createdAfter: moment().subtract(1, settings.timePeriod).format('YYYY-MM-DD')
      }

      if (settings.restrictToCurrentUser) {
        query.userId = state.auth.user.id
      }

      if (!state.requests.requestStarted) {
        dispatch(startRequest())
      }

      api.userActions.list(state.auth, query)
        .then((json) => {
          dispatch(setUserActionsForOfficial(official, json.results))
          dispatch(endRequest())
        })
        .catch((err) => {
          setSnackbarMessage('There was a problem loading some action logs')
          dispatch(endRequest())
        })
    }
  }
}

export function clearUserActions () {
  return {
    type: 'CLEAR_USER_ACTIONS'
  }
}

function setUserActionsForOfficial (official, userActions) {
  return {
    type: 'SET_USER_ACTIONS_FOR_OFFICIAL',
    userActions: userActions,
    identifier: official.identifier
  }
}
