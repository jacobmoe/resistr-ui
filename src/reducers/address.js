const address = (state = window.localStorage.address || null, action) => {
  switch (action.type) {
  case 'SET_ADDRESS':
    window.localStorage.address = action.address

    return action.address
  default:
    return state
  }
}

export default address
