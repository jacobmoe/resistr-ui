export function setCurrentUser (user) {
  return {
    type: 'SET_CURRENT_USER',
    user: user
  }
}

export function clearCurrentUser () {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}
