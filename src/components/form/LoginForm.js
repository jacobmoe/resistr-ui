import React from 'react'

import EmailField from './EmailField'
import PasswordField from './PasswordField'

const LoginForm = () => {
  return (
    <div>
      <EmailField /><br />
      <PasswordField />
    </div>
  )
}

export default LoginForm
