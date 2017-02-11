const members = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_MEMBERS':
    return action.members
  default:
    return state
  }
}

export default members
