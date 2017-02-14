import { resetMembers } from '../actions/members'

import {
  fetchCongressionalDistrictSearchResults
} from './congressionalDistrictSearchResults'
import { fetchMembers } from './members'

export function setLocation (location) {
  return {
    type: 'SET_LOCATION',
    location: location
  }
}

export function buildLocation (data) {
  const location = Object.assign({}, data)

  return (dispatch) => {
    resetMembers()

    dispatch(
      fetchCongressionalDistrictSearchResults(data.coords, (district) => {
        location.congressionalDistrict = district

        dispatch(setLocation(location))
        dispatch(fetchMembers(location))
      })
    )
  }
}
