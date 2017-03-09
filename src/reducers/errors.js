const errors = (state = {}, action) => {
  const key = action.key || 'site'
  let newState

  switch (action.type) {
  case 'ADD_ERRORS':
    newState = Object.assign({}, state)
    newState[key] = action.errors

    return newState
  case 'CLEAR_ERRORS':
    newState = Object.assign({}, state)
    delete newState[key]

    return newState
  default:
    return state
  }
}

export default errors
