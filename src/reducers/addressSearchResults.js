const addressSearchResults = (state = [], action) => {
  switch (action.type) {
  case 'SET_ADDRESS_SEARCH_RESULTS':
    return action.addressSearchResults
  default:
    return state
  }
}

export default addressSearchResults
