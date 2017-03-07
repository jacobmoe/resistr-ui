import React from 'react'

import FormLayout from './FormLayout'
import NameField from './NameField'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

const RegistrationForm = ({ submit }) => {
  return (
    <FormLayout submit={submit} title="Sign up">
      <NameField />
      <EmailField />
      <PasswordField />
    </FormLayout>
  )
}

export default RegistrationForm
