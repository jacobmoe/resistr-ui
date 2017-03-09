export function setSnackbarMessage (message) {
  return {
    type: 'SET_SNACKBAR_MESSAGE',
    message: message
  }
}
export function clearSnackbarMessage () {
  return {
    type: 'CLEAR_SNACKBAR_MESSAGE'
  }
}
