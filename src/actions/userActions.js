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
