import React from 'react'

// Needed for onTouchTap. Can remove in future material-ui releases
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Footer from './Footer'
import AddressSearch from '../containers/AddressSearch'
import MemberCardListContainer from '../containers/MemberCardListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <AddressSearch />
        <MemberCardListContainer />
      </div>
    </MuiThemeProvider>
  )
}

export default App
