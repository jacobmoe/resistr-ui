import api from '../api'
import { addErrors } from './errors'
import { setSnackbarMessage } from './snackbarMessage'
import { closeLogActionModal } from './logActionModal'

export function createUserAction (data, official) {
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

          // can be optimized by adding a new userAction
          // rather than fetching them all again
          dispatch(fetchUserActionsForOfficial(official.office, official))
        })
        .catch((err) => {
          dispatch(addErrors('userActionForm', err))
          setSnackbarMessage('There was a problem logging that action')
        })
    }
  }
}

export function fetchUserActionsForOfficial (office, official) {
  // should always be adding the office as a prop on official

  return (dispatch, getState) => {
    const state = getState()

    const query = {
      representative: {
        ocdDivisionIdentifier: office.divisionId,
        officeName: office.name,
        name: official.name
      }
    }

    // we probably don't actually want to require login here
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

function setUserActionsForOfficial (official, userActions) {
  return {
    type: 'SET_USER_ACTIONS_FOR_OFFICIAL',
    userActions: userActions,
    identifier: official.identifier
  }
}
