const defaultState = {list: [], lastSet: null}

const actions = (state = defaultState, action) => {
  switch (action.type) {
  case 'SET_ACTIONS':
    return {
      lastSet: new Date(),
      list: action.actions
    }
  case 'CLEAR_ACTIONS':
    return defaultState
  default:
    return state
  }
}

export default actions
