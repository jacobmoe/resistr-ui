import { connect } from 'react-redux'
import { register } from '../../actions/auth'
import { clearErrors } from '../../actions/errors'
import RegistrationForm from '../../components/form/RegistrationForm'

const mapStateToProps = (state) => {
  return {
    errors: state.errors.registrationForm || {},
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (params) => {
    dispatch(register(params))
  },
  clearErrors: () => {
    dispatch(clearErrors('registrationForm'))
  }
})

const Registration = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default Registration
