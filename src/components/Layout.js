import React from 'react'

import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blue900 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import DrawerContent from './DrawerContent'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900,
    accent1Color: blue900
  }
})

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
    <MuiThemeProvider muiTheme={muiTheme}>
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
    </MuiThemeProvider>
  )
}

export default Layout
