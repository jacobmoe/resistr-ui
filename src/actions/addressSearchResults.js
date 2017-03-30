import api from '../api'

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
    return api.get(path)
      .then((json) => {dispatch(setAddressResults(json))})
  }
}
