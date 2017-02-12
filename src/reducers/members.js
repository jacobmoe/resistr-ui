const members = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_MEMBERS':
    return action.members
  case 'RESET_MEMBERS':
    return []
  default:
    return state
  }
}

export default members
