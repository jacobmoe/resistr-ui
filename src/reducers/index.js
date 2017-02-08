import { combineReducers } from 'redux'
import cards from './cards'
import visibilityFilter from './visibilityFilter'

const cardApp = combineReducers({
  cards,
  visibilityFilter
})

export default cardApp
