const drawer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_DRAWER':
    return state ? false : true
  default:
    return state
  }
}

export default drawer
