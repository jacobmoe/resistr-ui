import { connect } from 'react-redux'
import OfficialCard from '../components/OfficialCard'
import { openDrawer } from '../actions/drawer'
import { setActiveOfficial } from '../actions/activeOfficial'
import { openLogActionModal } from '../actions/logActionModal'
import { loadActions } from '../actions/actions'
import { loadIssues } from '../actions/issues'
import { fetchUserActionsForOfficial } from '../actions/userActions'

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.auth,
    userActions: state.userActions,
    userActionDisplaySettings: state.userActionDisplaySettings
  }
}

const mapDispatchToProps = (dispatch) => ({
  openDrawer: () => {
    dispatch(openDrawer())
  },
  openLogActionModal: () => {
    dispatch(openLogActionModal())
  },
  setActiveOfficial: (official) => {
    dispatch(setActiveOfficial(official))
  },
  loadActions: () => {
    dispatch(loadActions())
  },
  loadIssues: () => {
    dispatch(loadIssues())
  },
  loadUserActions: (official, settings) => {
    dispatch(fetchUserActionsForOfficial(official, settings))
  }
})

const OfficialCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficialCard)

export default OfficialCardContainer
