import api from '../api'
import { startRequest, endRequest } from './requests'

function setAddressResults(json) {
  return {
    type: 'SET_ADDRESS_SEARCH_RESULTS',
    addressSearchResults: json.features || []
  }
}

export function fetchAddressSearchResults (term, browserCoords) {
  let path = '/api/geography/addresses?term=' + term

  if (browserCoords) {
    path += (
      '&focuslat=' +
      browserCoords.latitude +
      '&focuslon=' +
      browserCoords.longitude
    )
  }

  return (dispatch) => {
    dispatch(startRequest())
    return api.get(path)
      .then((json) => {dispatch(setAddressResults(json))})
      .then(() => {dispatch(endRequest())})
  }
}
