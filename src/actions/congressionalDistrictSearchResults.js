import api from '../api'
import { startRequest, endRequest } from './requests'

export function fetchCongressionalDistrictSearchResults(coords, cb) {
  const path = '/api/congress/house/districts'
  const query = '?lat='+coords.lat+'&lon='+coords.lon

  return (dispatch) => {
    dispatch(startRequest())

    return api.get(path + query)
      .then((response) => {return response.json()})
      .then((json) => {cb(json.results[0])})
      .then(() => {dispatch(endRequest())})
  }
}
