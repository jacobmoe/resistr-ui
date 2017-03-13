const userActions = (state = {}, action) => {
  switch (action.type) {
  case 'SET_USER_ACTIONS_FOR_OFFICIAL':
    return {
      ...state,
      [action.identifier]: action.userActions
    }
  default:
    return state
  }
}

export default userActions
