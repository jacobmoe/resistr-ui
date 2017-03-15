const userActions = (state = {}, action) => {
  switch (action.type) {
  case 'SET_USER_ACTIONS_FOR_OFFICIAL':
    return {
      ...state,
      [action.identifier]: action.userActions
    }
  case 'CLEAR_USER_ACTIONS':
    return {}
  default:
    return state
  }
}

export default userActions
