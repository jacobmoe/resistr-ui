import { connect } from 'react-redux'
import DivisionList from '../components/DivisionList'
import { openDrawer } from '../actions/drawer'

const mapStateToProps = (state) => {
  return {
    divisions: Object.keys(state.divisions).map((key) => {
      return state.divisions[key]
    }),
    loggedIn: !!state.token
  }
}

const mapDispatchToProps = (dispatch) => ({
  openDrawer: () => {
    dispatch(openDrawer())
  }
})

const DivisionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DivisionList)

export default DivisionListContainer
