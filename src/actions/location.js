import { resetMembers } from '../actions/members'
import { fetchDivisions, resetDivisions } from './divisions'

export function setLocation (location) {
  return {
    type: 'SET_LOCATION',
    location: location
  }
}

export function buildLocation (data) {
  const location = Object.assign({}, data)

  return (dispatch) => {
    resetDivisions()
    dispatch(setLocation(location))
    dispatch(fetchDivisions(location))
  }
}
