import { connect } from 'react-redux'
import { closeLogActionModal } from '../actions/logActionModal'
import { clearErrors } from '../actions/errors'
import { createUserAction } from '../actions/userActions'
import LogActionModal from '../components/LogActionModal'

const mapStateToProps = (state) => {
  return {
    isOpen: state.logActionModal,
    official: state.activeOfficial,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleCancel: () => {
    dispatch(closeLogActionModal())
  },
  handleSubmit: (form, official, auth) => {
    const params = Object.assign({}, form, {
      representative: {
        ocdDivisionIdentifier: official.office.divisionId,
        officeName: official.office.name,
        name: official.name
      }
    })

    dispatch(createUserAction(params, auth))
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
