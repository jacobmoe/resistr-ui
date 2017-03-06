import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import DrawerContent from './DrawerContent'

const MainAppBar = ({ handleAppBarClick }) => {
  return (
    <AppBar
      title="Resistr"
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
