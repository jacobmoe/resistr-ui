import api from '../api'

function requestAddresses() {
  return {
    type: 'REQUEST_ADDRESSES'
  }
}

function setAddresses(json) {
  return {
    type: 'SET_ADDRESSES',
    addresses: json.features
  }
}

export function fetchAddresses(term, browserCoords) {
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
    dispatch(requestAddresses())
    return api.get(path)
      .then((response) => {return response.json()})
      .then((json) => {dispatch(setAddresses(json))})
  }
}
