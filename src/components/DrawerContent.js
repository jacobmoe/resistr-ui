import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'
import { white, grey900 } from 'material-ui/styles/colors'

const styles = {
  titleLink: {
    color: white,
    textDecoration: 'none'
  },
  menuLink: {
    color: grey900,
    textDecoration: 'none'
  }
}

const DrawerContent = ({handleAppBarClick}) => {
  return (
    <div>
      <AppBar
        title={<Link to="/" style={styles.titleLink}>Resistr</Link>}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        onLeftIconButtonTouchTap={handleAppBarClick}
      />
      <Link to={"/login"} style={styles.menuLink}>
        <MenuItem>Login</MenuItem>
      </Link>
      <Link to={"/register"} style={styles.menuLink}>
        <MenuItem>Register</MenuItem>
      </Link>
    </div>
  )
}

export default DrawerContent
