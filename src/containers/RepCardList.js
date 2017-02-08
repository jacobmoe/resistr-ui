import { connect } from 'react-redux'
import { toggleCard } from '../actions'
import CardList from '../components/CardList'

const getReps = (reps, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return reps
  case 'SHOW_COMPLETED':
    return reps.filter(t => t.completed)
  case 'SHOW_ACTIVE':
    return reps.filter(t => !t.completed)
  default:
    throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  cards: getReps(state.cards, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onCardClick: (id) => {
    dispatch(toggleCard(id))
  }
})

const RepCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default RepCardList
