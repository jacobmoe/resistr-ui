import { connect } from 'react-redux'
import OfficialCard from '../components/OfficialCard'
import { openDrawer } from '../actions/drawer'
import { setActiveOfficial } from '../actions/activeOfficial'
import { openLogActionModal } from '../actions/logActionModal'

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.token
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
  }
})

const OfficialCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficialCard)

export default OfficialCardContainer
