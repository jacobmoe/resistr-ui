export function setToken (token) {
  return {
    type: 'SET_TOKEN',
    token: token
  }
}

export function clearToken () {
  return {
    type: 'CLEAR_TOKEN'
  }
}
