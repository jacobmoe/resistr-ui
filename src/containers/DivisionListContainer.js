import { connect } from 'react-redux'
import DivisionList from '../components/DivisionList'

const mapStateToProps = (state) => {
  return {
    divisions: Object.keys(state.divisions).map((key) => {
      return state.divisions[key]
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
})

const DivisionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DivisionList)

export default DivisionListContainer
