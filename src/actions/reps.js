import api from '../api'

function requestReps() {
  return {
    type: 'REQUEST_REPS'
  }
}

function receiveReps(json) {
  return {
    type: 'RECEIVE_REPS',
    reps: json.results
  }
}

export function fetchReps(value) {
  const path = '/api/congress/legislators'

  return (dispatch) => {
    dispatch(requestReps())
    return api.get(path)
      .then((response) => {return response.json()})
      .then((json) => {dispatch(receiveReps(json))})
  }
}
