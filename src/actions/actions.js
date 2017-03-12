import api from '../api'
import { setSnackbarMessage } from './snackbarMessage'

export function loadActions (auth) {
  return (dispatch, getState) => {
    const state = getState()

    if (!state.actions.lastSet) {
      api.actions.list(state.auth)
        .then((json) => {
          dispatch(setActions(json.results))
        })
        .catch((err) => {
          dispatch(setSnackbarMessage('Problem loading actions'))
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
