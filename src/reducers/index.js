import { combineReducers } from 'redux'
import cards from './cards'
import visibilityFilter from './visibilityFilter'
import members from './members'
import districts from './districts'

export default combineReducers({
  cards,
  visibilityFilter,
  members,
  districts
})
