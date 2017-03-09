import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import { clearErrors } from '../../actions/errors'
import LoginForm from '../../components/form/LoginForm'

const mapStateToProps = (state) => {
  return {
    errors: state.errors.loginForm || {}
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (params) => {
    dispatch(login(params))
  },
  clearErrors: () => {
    dispatch(clearErrors('loginForm'))
  }
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default Login
