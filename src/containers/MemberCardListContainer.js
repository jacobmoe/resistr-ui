import { connect } from 'react-redux'
import MemberCardList from '../components/MemberCardList'

const mapStateToProps = (state) => {
  return {
    members: state.members
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMemberCardClick: (id) => {
    // dispatch somethign
  }
})

const MemberCardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCardList)

export default MemberCardListContainer
