import { connect } from 'react-redux'
import { toggleDrawer } from '../actions/drawer'
import Layout from '../components/Layout'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.drawer
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAppBarClick: () => {
    dispatch(toggleDrawer())
  }
})

const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default LayoutContainer
