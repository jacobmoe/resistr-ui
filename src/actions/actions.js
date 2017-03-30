import api from '../api'
import { setSnackbarMessage } from './snackbarMessage'
import { startRequest, endRequest } from './requests'

export function loadActions (auth) {
  return (dispatch, getState) => {
    const state = getState()

    if (!state.actions.lastSet) {
      dispatch(startRequest())

      api.actions.list(state.auth)
        .then((json) => {
          dispatch(setActions(json.results))
          dispatch(endRequest())
        })
        .catch((err) => {
          dispatch(setSnackbarMessage('Problem loading actions'))
          dispatch(endRequest())
        })
    }

  }
}

export function setActions (actions) {
  return {
    type: 'SET_ACTIONS',
    actions: actions
  }
}

export function clearActions () {
  return {
    type: 'CLEAR_ACTIONS'
  }
}
