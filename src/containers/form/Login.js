import { connect } from 'react-redux'
import LoginForm from '../../components/form/LoginForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  submit: () => {
    debugger
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default Login
