import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import members from './members'
import addressSearchResults from './addressSearchResults'
import { browserCoords } from './coords'
import location from './location'
import requests from './requests'
import divisions from './divisions'
import drawer from './drawer'

export default combineReducers({
  requests,
  visibilityFilter,
  members,
  addressSearchResults,
  location,
  browserCoords,
  divisions,
  drawer
})
