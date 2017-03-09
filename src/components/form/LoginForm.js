import React, { Component } from 'react'

import FormLayout from './FormLayout'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

const LoginForm = ({ errors, submit, clearErrors }) => {
  return (
    <FormLayout errors={errors} submit={submit} clearErrors={clearErrors} title="Sign in">
      <EmailField />
      <PasswordField />
    </FormLayout>
  )
}

export default LoginForm
