import api from '../api'

function requestDistricts() {
  return {
    type: 'REQUEST_DISTRICTS'
  }
}

function receiveDistricts(json) {
  return {
    type: 'RECEIVE_DISTRICTS',
    districts: json.results
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
