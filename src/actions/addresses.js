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

export function fetchAddresses(term) {
  const path = '/api/geography/addresses?term=' + term

  return (dispatch) => {
    dispatch(requestAddresses())
    return api.get(path)
      .then((response) => {return response.json()})
      .then((json) => {dispatch(setAddresses(json))})
  }
}
