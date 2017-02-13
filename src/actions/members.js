import api from '../api'

function requestMembers() {
  return {
    type: 'REQUEST_MEMBERS'
  }
}

function receiveMembers(json) {
  return {
    type: 'RECEIVE_MEMBERS',
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

export function fetchMembers(district) {
  let members = {results: [], count: 0}

  return (dispatch) => {
    dispatch(requestMembers())

    return fetchSenators(district.state)
      .then((json) => {
        members.results = [...members.results, ...json.results]
        members.count += json.count
      })
      .then(() => fetchReps(district))
      .then((json) => {
        members.results = [...members.results, ...json.results]
        members.count += json.count
        return members
      })
      .then((members) => {dispatch(receiveMembers(members))})
  }
}

export function resetMembers () {
  return {
    type: 'RESET_MEMBERS'
  }
}
