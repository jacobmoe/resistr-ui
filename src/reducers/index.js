import { combineReducers } from 'redux'
import addressSearchResults from './addressSearchResults'
import { browserCoords } from './coords'
import address from './address'
import requests from './requests'
import divisions from './divisions'
import drawer from './drawer'
import errors from './errors'
import snackbarMessage from './snackbarMessage'
import auth from './auth'
import activeOfficial from './activeOfficial'
import logActionModal from './logActionModal'
import actions from './actions'
import issues from './issues'

export default combineReducers({
  requests,
  addressSearchResults,
  address,
  browserCoords,
  divisions,
  drawer,
  errors,
  snackbarMessage,
  auth,
  activeOfficial,
  logActionModal,
  actions,
  issues
})
