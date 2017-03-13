import api from '../api'
import { addErrors } from './errors'
import { setSnackbarMessage } from './snackbarMessage'
import { closeLogActionModal } from './logActionModal'

export function createUserAction (params, auth) {
  return (dispatch) => {
    api.userActions.create(params, auth)
      .then((json) => {
        dispatch(setSnackbarMessage('Action logged'))
        dispatch(closeLogActionModal())
      })
      .catch((err) => {
        dispatch(addErrors('userActionForm', err))
        setSnackbarMessage('There was a problem logging that action')
      })
  }
}

export function fetchUserActionsForOfficial (office, official) {
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
