import React from 'react'

import { FormsyText } from 'formsy-material-ui/lib'

const EmailField = () => {
  return (
    <FormsyText
      name="email"
      validations="isEmail"
      required
      hintText="Enter your email address"
      floatingLabelText="Email"
      validationError="Must be a valid email address"
    />
  )
}

export default EmailField
