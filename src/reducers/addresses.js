const addresses = (state = [], action) => {
  switch (action.type) {
  case 'SET_ADDRESSES':
    return action.addresses
  default:
    return state
  }
}

export default addresses
