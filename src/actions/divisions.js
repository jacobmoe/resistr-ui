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

export function fetchDivisions(address) {
  return (dispatch) => {
    dispatch(startRequest())

    const path = "/api/representatives?address="+address

    return api.get(path)
      .then((json) => {dispatch(setDivisions(json))})
      .then(() => {dispatch(endRequest())})
      .catch(() => {dispatch(endRequest())})
  }
}
