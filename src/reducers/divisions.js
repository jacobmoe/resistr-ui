const divisions = (state = {}, action) => {
  switch (action.type) {
  case 'SET_DIVISIONS':
    return action.divisions || {}
  case 'RESET_DIVISIONS':
    return []
  default:
    return state
  }
}

export default divisions
