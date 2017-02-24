import api from '../api'
import { startRequest, endRequest } from './requests'

function setDivisions(json) {
  return {
    type: 'SET_DIVISIONS',
    divisions: json.divisions
  }
}

export function resetDivisions() {
  return {
    type: 'RESET_DIVISIONS'
  }
}

export function fetchDivisions(location) {
  return (dispatch) => {
    dispatch(startRequest())

    const path = "/api/representatives?address="+location.label

    return api.get(path)
      .then((response) => {return response.json()})
      .then((json) => {dispatch(setDivisions(json))})
      .then(() => {dispatch(endRequest())})
  }
}
