const members = (state = [], action) => {
  switch (action.type) {
  case 'SET_MEMBERS':
    return action.members
  case 'RESET_MEMBERS':
    return []
  default:
    return state
  }
}

export default members
