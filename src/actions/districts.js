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

export function fetchDistricts(value) {
  const path = '/api/congress/house/districts?zip=' + value

  return (dispatch) => {
    dispatch(requestDistricts())
    return api.get(path)
      .then((response) => {return response.json()})
      .then((json) => {dispatch(receiveDistricts(json))})
  }
}

export function resetDistricts() {
  return {
    type: 'RESET_DISTRICTS'
  }
}
