import api from '../api'
import { addErrors } from './errors'

export function register (params) {
  return (dispatch) => {
    api.auth.register(params)
      .then((json) => {
        // add user and token
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
