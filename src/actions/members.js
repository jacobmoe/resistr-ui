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

export function fetchMembers(value) {
  const path = '/api/congress/legislators?zip=' + value

  return (dispatch) => {
    dispatch(requestMembers())
    return api.get(path)
      .then((response) => {return response.json()})
      .then((json) => {dispatch(receiveMembers(json))})
  }
}
