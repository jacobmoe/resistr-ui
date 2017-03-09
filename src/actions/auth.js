import { browserHistory } from 'react-router'

import api from '../api'
import { addErrors } from './errors'
import { setToken } from './token'
import { setCurrentUser } from './currentUser'
import { setSnackbarMessage } from './snackbarMessage'

export function register (params) {
  return (dispatch) => {
    api.auth.register(params)
      .then((json) => {
        dispatch(setToken(json.token))
        dispatch(setCurrentUser(json.user))
        dispatch(setSnackbarMessage("Success! Account created"))
        browserHistory.push('/')
      })
      .catch((err) => {
        dispatch(addErrors('registrationForm', err))
      })
  }
}

export function login (user) {
  return (dispatch) => {

  }
}

export function logout (user) {
  return (dispatch) => {

  }
}
