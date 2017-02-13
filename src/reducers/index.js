import { combineReducers } from 'redux'
import cards from './cards'
import visibilityFilter from './visibilityFilter'
import members from './members'
import { districts, district } from './districts'
import addresses from './addresses'

export default combineReducers({
  cards,
  visibilityFilter,
  members,
  districts,
  district,
  addresses
})
