import { combineReducers } from 'redux'
import cards from './cards'
import visibilityFilter from './visibilityFilter'
import members from './members'

export default combineReducers({
  cards,
  visibilityFilter,
  members
})
