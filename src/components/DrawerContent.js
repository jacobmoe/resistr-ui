import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'

const DrawerContent = ({handleAppBarClick}) => {
  return (
    <div>
      <AppBar
          title={<Link to="/">Resistr</Link>}
          iconElementLeft={
            <IconButton><NavigationClose /></IconButton>
          }
          onLeftIconButtonTouchTap={handleAppBarClick}
      />
      <MenuItem><Link to={"/login"}>Login</Link></MenuItem>
      <MenuItem><Link to={"/register"}>Register</Link></MenuItem>
    </div>
  )
}

export default DrawerContent
