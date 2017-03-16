import { connect } from 'react-redux'
import { closeLogActionModal } from '../actions/logActionModal'
import { clearErrors } from '../actions/errors'
import { createUserAction } from '../actions/userActions'
import LogActionModal from '../components/LogActionModal'

const mapStateToProps = (state) => {
  return {
    isOpen: state.logActionModal,
    official: state.activeOfficial,
    actionList: state.actions.list,
    issueList: state.issues.list,
    userActionDisplaySettings: state.userActionDisplaySettings

  }
}

const mapDispatchToProps = (dispatch) => ({
  handleCancel: () => {
    dispatch(closeLogActionModal())
  },
  handleSubmit: (form, official, settings) => {
    dispatch(createUserAction(form, official, settings))
  },
  clearLogActionErrors: () => {
    dispatch(clearErrors('userActionForm'))
  }
})

const LogActionModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogActionModal)

export default LogActionModalContainer
