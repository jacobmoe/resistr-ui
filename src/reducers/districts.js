export const districts = (state = [], action) => {
  switch (action.type) {
  case 'SET_DISTRICTS':
    return action.districts
  case 'RESET_DISTRICTS':
    return []
  default:
    return state
  }
}

export const district = (state = null, action) => {
  switch (action.type) {
  case 'SET_DISTRICT':
    return action.district
  default:
    return state
  }
}
