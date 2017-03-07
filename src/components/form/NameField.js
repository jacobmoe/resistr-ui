import React from 'react'

import { FormsyText } from 'formsy-material-ui/lib'

const NameField = () => {
  return (
    <FormsyText
        name="name"
        validations="isWords"
        required
        hintText="Your name"
        floatingLabelText="Name"
    />
  )
}

export default NameField
