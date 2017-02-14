const congressionalDistrict = (state = null, action) => {
  switch (action.type) {
  case 'SET_CONGRESSIONAL_DISTRICT':
    return action.district
  default:
    return state
  }
}

export default congressionalDistrict
