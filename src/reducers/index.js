import { combineReducers } from 'redux'
import cards from './cards'
import visibilityFilter from './visibilityFilter'
import reps from './reps'

export default combineReducers({
  cards,
  visibilityFilter,
  reps
})
