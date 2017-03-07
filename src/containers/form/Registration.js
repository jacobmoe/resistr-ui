import { connect } from 'react-redux'
import RegistrationForm from '../../components/form/RegistrationForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  submit: () => {
    debugger
  }
})

const Registration = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default Registration
