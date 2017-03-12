import { connect } from 'react-redux'
import OfficialCard from '../components/OfficialCard'
import { openDrawer } from '../actions/drawer'
import { setActiveOfficial } from '../actions/activeOfficial'
import { openLogActionModal } from '../actions/logActionModal'
import { loadActions } from '../actions/actions'
import { loadIssues } from '../actions/issues'

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  openDrawer: () => {
    dispatch(openDrawer())
  },
  openLogActionModal: () => {
    dispatch(openLogActionModal())
  },
  setActiveOfficial: (official, office, division) => {
    dispatch(setActiveOfficial(official, office, division))
  },
  loadActions: () => {
    dispatch(loadActions())
  },
  loadIssues: () => {
    dispatch(loadIssues())
  }
})

const OfficialCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficialCard)

export default OfficialCardContainer
