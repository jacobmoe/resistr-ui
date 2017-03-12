import { browserHistory } from 'react-router'

import api from '../api'
import { addErrors } from './errors'
import { setToken, clearToken } from './token'
import { setCurrentUser, clearCurrentUser } from './currentUser'
import { setSnackbarMessage } from './snackbarMessage'

function handleAuthSuccess (dispatch, json, message) {
  dispatch(setToken(json.token))
  dispatch(setCurrentUser(json.user))
  dispatch(setSnackbarMessage(message))
  browserHistory.push('/')
}

export function register (params) {
  return (dispatch) => {
    api.auth.register(params)
      .then((json) => {
        handleAuthSuccess(dispatch, json, 'Success! Account created')
      })
      .catch((err) => {
        dispatch(addErrors('registrationForm', err))
      })
  }
}

export function login (params) {
  return (dispatch) => {
    api.auth.login(params)
      .then((json) => {
        handleAuthSuccess(dispatch, json, 'Logged in')
      })
      .catch((err) => {
        dispatch(addErrors('loginForm', err))
      })
  }
}

export function logout (user) {
  return (dispatch) => {
    dispatch(clearToken())
    dispatch(clearCurrentUser())
    dispatch(setSnackbarMessage('Logged out'))
    browserHistory.push('/')
  }
}
