import api from '../api'
import { fetchMembers, resetMembers } from './members'

function requestDistricts() {
  return {
    type: 'REQUEST_DISTRICTS'
  }
}

function receiveDistricts(json) {
  return (dispatch) => {
    if (json.results.length === 1) {
      dispatch(updateDistrict(json.results[0]))
    }

    dispatch(setDistricts(json.results))
    dispatch(resetMembers())
  }
}

function setDistrict(district) {
  return {
    type: 'SET_DISTRICT',
    district: district
  }
}

export function updateDistrict(district) {
  return (dispatch) => {
    dispatch(setDistrict(district))
    dispatch(fetchMembers(district))
    dispatch(resetDistricts())
  }
}

export function setDistricts(districts) {
  return {
    type: 'SET_DISTRICTS',
    districts: districts
  }
}

export function fetchDistricts(coords) {
  const path = '/api/congress/house/districts'
  const query = '?lat='+coords.lat+'&lon='+coords.lon

  return (dispatch) => {
    dispatch(requestDistricts())
    return api.get(path + query)
      .then((response) => {return response.json()})
      .then((json) => {dispatch(receiveDistricts(json))})
  }
}

export function resetDistricts() {
  return {
    type: 'RESET_DISTRICTS'
  }
}
