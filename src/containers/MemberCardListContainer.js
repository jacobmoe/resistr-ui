import { connect } from 'react-redux'
import { toggleCard } from '../actions/cards'
import MemberCardList from '../components/MemberCardList'

const getMembers = (members, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return members
  case 'SHOW_COMPLETED':
    return members.filter(t => t.completed)
  case 'SHOW_ACTIVE':
    return members.filter(t => !t.completed)
  default:
    throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  return {
    members: getMembers(state.members, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMemberCardClick: (id) => {
    dispatch(toggleCard(id))
  }
})

const MemberCardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCardList)

export default MemberCardListContainer
