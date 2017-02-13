import React from 'react'

// Needed for onTouchTap. Can remove in future material-ui releases
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Footer from './Footer'
import AddressSearch from '../containers/AddressSearch'
import LocationForm from '../containers/LocationForm'
import Content from '../containers/Content'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <AddressSearch />
        <LocationForm />
        <Content />
      </div>
    </MuiThemeProvider>
  )
}

export default App
