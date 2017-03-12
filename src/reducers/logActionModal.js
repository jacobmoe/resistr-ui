const logActionModal = (state = false, action) => {
  switch (action.type) {
  case 'OPEN_LOG_ACTION_MODAL':
    return true
  case 'CLOSE_LOG_ACTION_MODAL':
    return false
  default:
    return state
  }
}

export default logActionModal
