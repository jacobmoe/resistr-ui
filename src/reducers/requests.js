const requests = (state = false, action) => {
  switch (action.type) {
  case 'START_REQUEST':
    return {
      requestStarted: true
    }
  case 'STOP_REQUEST':
    return {
      requestStarted: false
    }
  default:
    return state
  }
}

export default requests
