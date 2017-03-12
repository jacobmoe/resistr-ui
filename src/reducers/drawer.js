const drawer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_DRAWER':
    return !state
  case 'OPEN_DRAWER':
    return true
  case 'CLOSE_DRAWER':
    return false
  default:
    return state
  }
}

export default drawer
