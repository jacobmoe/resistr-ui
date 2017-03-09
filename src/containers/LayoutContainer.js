import { connect } from 'react-redux'
import { toggleDrawer } from '../actions/drawer'
import { clearSnackbarMessage } from '../actions/snackbarMessage'
import Layout from '../components/Layout'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.drawer,
    snackbarMessage: state.snackbarMessage
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAppBarClick: () => {
    dispatch(toggleDrawer())
  },
  handleSnackbarClose: () => {
    dispatch(clearSnackbarMessage())
  }
})

const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default LayoutContainer
