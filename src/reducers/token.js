const token = (state = window.localStorage.token || null, action) => {
  switch (action.type) {
  case 'SET_TOKEN':
    window.localStorage.token = action.token

    return action.token
  case 'CLEAR_TOKEN':
    return null
  default:
    return state
  }
}
