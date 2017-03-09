const defaultState = {
  requestStarted: false
}

const requests = (state = defaultState, action) => {
  switch (action.type) {
  case 'START_REQUEST':
    return {
      requestStarted: true
    }
  case 'END_REQUEST':
    return {
      requestStarted: false
    }
  default:
    return state
  }
}

export default requests
