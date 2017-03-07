const drawer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_DRAWER':
    return !state
  case 'CLOSE_DRAWER':
    return false
  default:
    return state
  }
}

export default drawer
