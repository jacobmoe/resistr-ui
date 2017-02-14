import { fetchMembers } from './members'
import {
  resetCongressionalDistrictSearchResults
} from './congressionalDistrictSearchResults'

export function updateCongressionalDistrict(district) {
  return (dispatch) => {
    dispatch(setCongressionalDistrict(district))
    dispatch(fetchMembers(district))
    dispatch(resetCongressionalDistrictSearchResults())
  }
}


export function setCongressionalDistrict(district) {
  return {
    type: 'SET_CONGRESSIONAL_DISTRICT',
    district: district
  }
}
