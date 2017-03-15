import React, { Component } from 'react'

// https://material.io/icons/

import Badge from 'material-ui/Badge'
import { green600 } from 'material-ui/styles/colors'

import PanTool from 'material-ui/svg-icons/action/pan-tool'
import AccountBalance from 'material-ui/svg-icons/action/account-balance'
import Call from 'material-ui/svg-icons/communication/call'
import Voicemail from 'material-ui/svg-icons/communication/voicemail'
import TextSms from 'material-ui/svg-icons/communication/textsms'
import Email from 'material-ui/svg-icons/communication/email'
import ContactMail from 'material-ui/svg-icons/communication/contact-mail'
import MailOutline from 'material-ui/svg-icons/communication/mail-outline'
import People from 'material-ui/svg-icons/social/people'
import PeopleOutline from 'material-ui/svg-icons/social/people-outline'
import Business from 'material-ui/svg-icons/communication/business'
import Keyboard from 'material-ui/svg-icons/hardware/keyboard'
import Scanner from 'material-ui/svg-icons/hardware/scanner'

const styles = {
  badge: {
    width: '17px',
    height: '17px',
    fontSize: '9px',
    backgroundColor: green600,
    left: '20px'
  },
  badgeContainer: {
    padding: '7px'
  }
}

const IconForAction = ({ iconName, style }) => {
  switch (iconName) {
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
    case 'keyboard':
      return <Keyboard />
    case 'account-balance':
      return <AccountBalance />
    case 'scanner':
      return <Scanner />
    default:
      return <PanTool />
  }
}

const ActionIcon = ({ iconName, count, style }) => {
  style = style || null

  if (count) {
    return (
      <Badge style={styles.badgeContainer} badgeStyle={styles.badge} badgeContent={count} secondary={true} >
        <IconForAction iconName={iconName} />
      </Badge>
    )
  } else {
    return (
      <span style={style}>
        <IconForAction iconName={iconName} />
      </span>
    )
  }
}

export default ActionIcon
