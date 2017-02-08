import { connect } from 'react-redux'
import { toggleCard } from '../actions'
import RepCardList from '../components/RepCardList'

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
  onRepCardClick: (id) => {
    dispatch(toggleCard(id))
  }
})

const RepCardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepCardList)

export default RepCardListContainer
