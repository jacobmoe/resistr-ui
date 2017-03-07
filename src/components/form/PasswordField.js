import React from 'react'

import { FormsyText } from 'formsy-material-ui/lib'

const PasswordField = () => {
  return (
    <FormsyText
        name="password"
        type="password"
        required
        hintText="Enter your password"
        floatingLabelText="Password"
        validationError="Must be present"
    />
  )
}

export default PasswordField
