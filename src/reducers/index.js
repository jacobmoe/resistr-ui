import { combineReducers } from 'redux'
import cards from './cards'
import visibilityFilter from './visibilityFilter'
import members from './members'
import congressionalDistrictSearchResults
  from './congressionalDistrictSearchResults'
import congressionalDistrict from './congressionalDistrict'
import addressSearchResults from './addressSearchResults'
import { browserCoords } from './coords'
import address from './address'

export default combineReducers({
  cards,
  visibilityFilter,
  members,
  congressionalDistrictSearchResults,
  congressionalDistrict,
  addressSearchResults,
  address,
  browserCoords
})
