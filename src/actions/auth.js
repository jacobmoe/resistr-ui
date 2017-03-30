import { browserHistory } from 'react-router'

import api from '../api'
import { addErrors } from './errors'
import { setSnackbarMessage } from './snackbarMessage'
import { clearUserActions } from './userActions'
import { startRequest, endRequest } from './requests'

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
    dispatch(startRequest())

    api.auth.register(params)
      .then((json) => {
        handleAuthSuccess(dispatch, json, 'Success! Account created')
        dispatch(endRequest())
      })
      .catch((err) => {
        dispatch(addErrors('registrationForm', err))
        dispatch(endRequest())
      })
  }
}

export function login (params) {
  return (dispatch) => {
    dispatch(startRequest())

    api.auth.login(params)
      .then((json) => {
        handleAuthSuccess(dispatch, json, 'Logged in')
        dispatch(endRequest())
      })
      .catch((err) => {
        dispatch(addErrors('loginForm', err))
        dispatch(endRequest())
      })
  }
}

export function logout (user) {
  return (dispatch) => {
    dispatch(clearAuth())
    dispatch(clearUserActions())
    dispatch(setSnackbarMessage('Logged out'))
    browserHistory.push('/')
  }
}
