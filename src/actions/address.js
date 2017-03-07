import { fetchDivisions, resetDivisions } from './divisions'

export function setAddress (address) {
  return {
    type: 'SET_ADDRESS',
    address: address
  }
}

export function buildAddress (address) {
  return (dispatch) => {
    resetDivisions()
    dispatch(setAddress(address))
    dispatch(fetchDivisions(address))
  }
}
