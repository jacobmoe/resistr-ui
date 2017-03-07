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
          iconElementLeft={
            <IconButton><NavigationClose /></IconButton>
                          }
          onLeftIconButtonTouchTap={handleAppBarClick}
      />
      <MenuItem>
        <Link to={"/login"} style={styles.menuLink}>Login</Link>
      </MenuItem>
      <MenuItem>
        <Link to={"/register"} style={styles.menuLink}>Register</Link>
      </MenuItem>
    </div>
  )
}

export default DrawerContent
