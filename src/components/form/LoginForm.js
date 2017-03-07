import React, { Component } from 'react'

import FormLayout from './FormLayout'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

const LoginForm = ({ submit }) => {
  return (
    <FormLayout submit={submit} title="Sign in">
      <EmailField />
      <PasswordField />
    </FormLayout>
  )
}

export default LoginForm
