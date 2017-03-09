import React from 'react'

import FormLayout from './FormLayout'
import NameField from './NameField'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

const RegistrationForm = ({ errors, submit, clearErrors }) => {
  return (
    <FormLayout errors={errors} submit={submit} clearErrors={clearErrors} title="Sign up">
      <NameField />
      <EmailField />
      <PasswordField />
    </FormLayout>
  )
}

export default RegistrationForm
