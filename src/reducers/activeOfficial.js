const activeOfficial = (state = null, action) => {
  switch (action.type) {
  case 'SET_ACTIVE_OFFICIAL':
    return action.official
  default:
    return state
  }
}

export default activeOfficial
