const defaultState = {list: [], lastSet: null}

const issues = (state = defaultState, action) => {
  switch (action.type) {
  case 'SET_ISSUES':
    return {
      lastSet: new Date(),
      list: action.issues
    }
  case 'CLEAR_ISSUES':
    return defaultState
  default:
    return state
  }
}

export default issues
