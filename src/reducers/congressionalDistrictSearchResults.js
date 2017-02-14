const congressionalDistrictSearchResults = (state = [], action) => {
  switch (action.type) {
  case 'SET_CONGRESSIONAL_DISTRICT_SEARCH_RESULTS':
    return action.districts
  case 'RESET_CONGRESSIONAL_DISTRICT_SEARCH_RESULTS':
    return []
  default:
    return state
  }
}

export default congressionalDistrictSearchResults

