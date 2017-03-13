import React, { Component } from 'react'

// https://material.io/icons/

import PanTool from 'material-ui/svg-icons/action/pan-tool'
import Call from 'material-ui/svg-icons/communication/call'
import Voicemail from 'material-ui/svg-icons/communication/voicemail'
import TextSms from 'material-ui/svg-icons/communication/textsms'
import Email from 'material-ui/svg-icons/communication/email'
import ContactMail from 'material-ui/svg-icons/communication/contact-mail'
import MailOutline from 'material-ui/svg-icons/communication/mail-outline'
import People from 'material-ui/svg-icons/social/people'
import PeopleOutline from 'material-ui/svg-icons/social/people-outline'
import Business from 'material-ui/svg-icons/communication/business'

const IconForAction = ({ action }) => {
  switch (action.iconName) {
    case 'call':
      return <Call />
    case 'voicemail':
      return <Voicemail />
    case 'textsms':
      return <TextSms />
    case 'email':
      return <Email />
    case 'contact-mail':
      return <ContactMail />
    case 'mail-outline':
      return <MailOutline />
    case 'people':
      return <People />
    case 'people-outline':
      return <PeopleOutline />
    case 'business':
      return <Business />
    default:
      return <PanTool />
  }
}

const ActionIcon = ({ action }) => {
  let icon

  return (
    <IconForAction action={action} />
  )
}

export default ActionIcon
