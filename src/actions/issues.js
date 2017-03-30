import api from '../api'
import { setSnackbarMessage } from './snackbarMessage'
import { startRequest, endRequest } from './requests'

export function loadIssues (auth) {
  return (dispatch, getState) => {
    const state = getState()

    if (!state.issues.lastSet) {
      dispatch(startRequest())

      api.issues.list(state.auth)
        .then((json) => {
          dispatch(setIssues(json.results))
          dispatch(endRequest())
        })
        .catch((err) => {
          dispatch(setSnackbarMessage('Problem loading issues'))
          dispatch(endRequest())
        })
    }
  }
}

export function setIssues (issues) {
  return {
    type: 'SET_ISSUES',
    issues: issues
  }
}

export function clearIssues () {
  return {
    type: 'CLEAR_ISSUES'
  }
}
