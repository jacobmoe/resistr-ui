import { connect } from 'react-redux'
import { toggleDrawer } from '../actions/drawer'
import { clearSnackbarMessage } from '../actions/snackbarMessage'
import { logout } from '../actions/auth'
import { updateSetting } from '../actions/userActionDisplaySettings'
import Layout from '../components/Layout'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.drawer,
    snackbarMessage: state.snackbarMessage,
    loggedIn: !!state.auth,
    settings: state.userActionDisplaySettings
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAppBarClick: () => {
    dispatch(toggleDrawer())
  },
  handleSnackbarClose: () => {
    dispatch(clearSnackbarMessage())
  },
  logout: () => {
    dispatch(logout())
  },
  updateSetting: (name, value) => {
    dispatch(updateSetting(name, value))
  }
})

const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default LayoutContainer
