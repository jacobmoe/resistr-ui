import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { Link } from 'react-router'
import { white } from 'material-ui/styles/colors'
import DrawerContent from './DrawerContent'

const styles = {
  appBarLink: {
    color: white,
    textDecoration: 'none'
  }
}

const MainAppBar = ({ handleAppBarClick }) => {
  return (
    <AppBar
        title={
          <div>
            <Link to="/" style={styles.appBarLink}>
              Resistr
            </Link>
          </div>
        }
        onLeftIconButtonTouchTap={handleAppBarClick}
    />
  )
}

const Layout = ({ children, drawerOpen, handleAppBarClick }) => {
  return (
    <div>
      <MainAppBar handleAppBarClick={handleAppBarClick} />
      <Drawer
          onRequestChange={handleAppBarClick}
          open={drawerOpen}
          docked={false} >
        <DrawerContent handleAppBarClick={handleAppBarClick} />
      </Drawer>
      {children}
    </div>
  )
}

export default Layout
