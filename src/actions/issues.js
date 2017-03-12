import api from '../api'
import { setSnackbarMessage } from './snackbarMessage'

export function loadIssues (auth) {
  return (dispatch, getState) => {
    const state = getState()

    if (!state.issues.lastSet) {
      api.issues.list(state.auth)
        .then((json) => {
          dispatch(setIssues(json.results))
        })
        .catch((err) => {
          dispatch(setSnackbarMessage('Problem loading issues'))
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
