import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import members from './members'
import addressSearchResults from './addressSearchResults'
import { browserCoords } from './coords'
import location from './location'

export default combineReducers({
  visibilityFilter,
  members,
  addressSearchResults,
  location,
  browserCoords
})
