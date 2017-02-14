import React from 'react'

// Needed for onTouchTap. Can remove in future material-ui releases
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AddressSearch from '../containers/AddressSearch'
import MemberCardListContainer from '../containers/MemberCardListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blue900 } from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900,
    accent1Color: blue900
  }
})

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar title="Resistr"/>
        <AddressSearch />
        <MemberCardListContainer />
      </div>
    </MuiThemeProvider>
  )
}

export default App
