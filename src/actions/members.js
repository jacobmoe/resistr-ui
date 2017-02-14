import api from '../api'
import { startRequest, endRequest } from './requests'

function setMembers(json) {
  return {
    type: 'SET_MEMBERS',
    members: json.results
  }
}

function fetchSenators(state) {
  const path = '/api/congress/senate/states/'+state+'/members'
  return api.get(path)
    .then((response) => {return response.json()})
}

function fetchReps (districtInfo) {
  const dist = districtInfo.state + '-' + districtInfo.district
  const path = '/api/congress/house/districts/'+dist+'/members'
  return api.get(path)
    .then((response) => {return response.json()})
}

function fetchStateLegislators (location) {
  const coords = location.coords

  const path = '/api/states/search'
  const query = '?lat='+coords.lat+'&lon='+coords.lon

  return api.get(path+query)
    .then((response) => {return response.json()})
}

function combineMembers(members, json) {
  return [...members.results, ...json.results]
}

export function fetchMembers(location) {
  let members = {results: []}
  const congressionalDistrict = location.congressionalDistrict

  const combine = (json) => {
    members.results = [...members.results, ...json.results]
  }

  return (dispatch) => {
    dispatch(startRequest())

    return fetchSenators(congressionalDistrict.state)
      .then(combine)
      .then(() => fetchReps(congressionalDistrict))
      .then(combine)
      .then(() => fetchStateLegislators(location))
      .then(combine)
      .then(() => {dispatch(setMembers(members))})
      .then(() => {dispatch(endRequest())})
  }
}

export function resetMembers () {
  return {
    type: 'RESET_MEMBERS'
  }
}
