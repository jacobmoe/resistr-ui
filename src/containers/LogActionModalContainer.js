import { connect } from 'react-redux'
import { closeLogActionModal } from '../actions/logActionModal'
import { clearErrors } from '../actions/errors'
import LogActionModal from '../components/LogActionModal'

const mapStateToProps = (state) => {
  return {
    isOpen: state.logActionModal,
    official: state.activeOfficial
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleCancel: () => {
    dispatch(closeLogActionModal())
  },
  handleSubmit: (form, official) => {
    debugger
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
