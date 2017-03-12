import { connect } from 'react-redux'
import { clearErrors } from '../actions/errors'
import OfficialCard from '../components/OfficialCard'
import { openDrawer } from '../actions/drawer'

const mapStateToProps = (state) => {
  return {
    userActionErrors: state.errors.userActionForm || {},
    loggedIn: !!state.token
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (params) => {
    debugger
  },
  clearLogActionErrors: () => {
    dispatch(clearErrors('userActionForm'))
  },
  openDrawer: () => {
    dispatch(openDrawer())
  }
})

const OfficialCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficialCard)

export default OfficialCardContainer
