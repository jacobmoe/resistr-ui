import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MenuItem from 'material-ui/MenuItem'

const DrawerContent = ({handleAppBarClick}) => {
  return (
    <div>
      <AppBar
        title="Resistr"
        iconElementLeft={
            <IconButton><NavigationClose /></IconButton>
        }
        onLeftIconButtonTouchTap={handleAppBarClick}
      />
      <MenuItem>Login</MenuItem>
      <MenuItem>Register</MenuItem>
    </div>
  )
}

export default DrawerContent
