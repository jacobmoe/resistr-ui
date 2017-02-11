// Needed for onTouchTap. Can remove in future material-ui releases
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react'
import Footer from './Footer'
import LocationForm from '../containers/LocationForm'
import MemberCardList from '../containers/MemberCardListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <div>
      <LocationForm />
      <MemberCardList />
    </div>
  </MuiThemeProvider>
)

export default App
