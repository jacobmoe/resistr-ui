import { connect } from 'react-redux'
import DivisionList from '../components/DivisionList'

const mapStateToProps = (state) => {
  return {
    divisions: Object.values(state.divisions)
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMemberCardClick: (id) => {
    // dispatch somethign
  }
})

const DivisionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DivisionList)

export default DivisionListContainer
