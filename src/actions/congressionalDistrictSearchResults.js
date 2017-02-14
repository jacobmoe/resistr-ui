import api from '../api'
import { startRequest, endRequest } from './requests'
import { updateCongressionalDistrict } from './congressionalDistrict'
import { resetMembers } from './members'

function receiveCongressionalDistrictSearchResults(json) {
  return (dispatch) => {
    if (json.results.length === 1) {
      dispatch(updateCongressionalDistrict(json.results[0]))
    }

    dispatch(setCongressionalDistrictSearchResults(json.results))
    dispatch(resetMembers())
  }
}

export function setCongressionalDistrictSearchResults(districts) {
  return {
    type: 'SET_CONGRESSIONAL_DISTRICT_SEARCH_RESULTS',
    districts: districts
  }
}

export function fetchCongressionalDistrictSearchResults(coords) {
  const path = '/api/congress/house/districts'
  const query = '?lat='+coords.lat+'&lon='+coords.lon

  return (dispatch) => {
    dispatch(startRequest())
    return api.get(path + query)
      .then((response) => {return response.json()})
      .then((json) => {
        dispatch(receiveCongressionalDistrictSearchResults(json))
      })
      .then(() => {dispatch(endRequest())})
  }
}

export function resetCongressionalDistrictSearchResults() {
  return {
    type: 'RESET_CONGRESSIONAL_DISTRICT_SEARCH_RESULTS'
  }
}
