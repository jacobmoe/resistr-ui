import api from '../api'
import { addErrors } from './errors'
import { setSnackbarMessage } from './snackbarMessage'
import { closeLogActionModal } from './logActionModal'

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

    if (state.auth) {
      api.userActions.create(params, state.auth)
        .then((json) => {
          dispatch(setSnackbarMessage('Action logged'))
          dispatch(closeLogActionModal())
          dispatch(fetchUserActionsForOfficial(official, settings))
        })
        .catch((err) => {
          dispatch(addErrors('userActionForm', err))
          setSnackbarMessage('There was a problem logging that action')
        })
    }
  }
}

export function fetchUserActionsForOfficial (official, settings) {
  return (dispatch, getState) => {
    const state = getState()

    const query = {
      representative: {
        ocdDivisionIdentifier: official.office.divisionId,
        officeName: official.office.name,
        name: official.name
      },
      timePeriod: settings.timePeriod
    }

    if (settings.restrictToCurrentUser) {
      query.userId = state.auth.user.id
    }

    // not sure if we actually want to require login here
    if (state.auth) {
      api.userActions.list(state.auth, query)
        .then((json) => {
          dispatch(setUserActionsForOfficial(official, json.results))
        })
        .catch((err) => {
          setSnackbarMessage('There was a problem loading some action logs')
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
