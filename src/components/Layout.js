import React from 'react'

import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blue900 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900,
    accent1Color: blue900
  }
})

const Layout = (props) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar title="Resistr"/>
        {props.children}
      </div>
    </MuiThemeProvider>
  )
}

export default Layout
