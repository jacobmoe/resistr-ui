import { browserHistory } from 'react-router'

import api from '../api'
import { addErrors } from './errors'
import { setSnackbarMessage } from './snackbarMessage'

function setAuth (authData) {
  return {
    type: 'SET_AUTH',
    auth: authData
  }
}

function clearAuth () {
  return {
    type: 'CLEAR_AUTH'
  }
}

function handleAuthSuccess (dispatch, json, message) {
  dispatch(setAuth(json))
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
    dispatch(clearAuth())
    dispatch(setSnackbarMessage('Logged out'))
    browserHistory.push('/')
  }
}
