import { combineReducers } from 'redux'
import addressSearchResults from './addressSearchResults'
import { browserCoords } from './coords'
import address from './address'
import requests from './requests'
import divisions from './divisions'
import drawer from './drawer'
import errors from './errors'
import snackbarMessage from './snackbarMessage'

export default combineReducers({
  requests,
  addressSearchResults,
  address,
  browserCoords,
  divisions,
  drawer,
  errors,
  snackbarMessage
})
