let defaultAuth = null

if (window.localStorage.auth) {
  try {
    defaultAuth = JSON.parse(window.localStorage.auth)
  } catch (e) {
    delete window.localStorage.auth
  }
}

const auth = (state = defaultAuth, action) => {
  switch (action.type) {
  case 'SET_AUTH':
    window.localStorage.auth = JSON.stringify(action.auth)

    return action.auth
  case 'CLEAR_AUTH':
    delete window.localStorage.auth

    return null
  default:
    return state
  }
}

export default auth
