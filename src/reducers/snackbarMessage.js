const snackbarMessage = (state = '', action) => {
  switch (action.type) {
  case 'SET_SNACKBAR_MESSAGE':
    return action.message
  case 'CLEAR_SNACKBAR_MESSAGE':
    return ''
  default:
    return state
  }
}

export default snackbarMessage
