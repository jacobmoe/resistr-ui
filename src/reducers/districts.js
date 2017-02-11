const districts = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_DISTRICTS':
    return action.districts
  default:
    return state
  }
}

export default districts
