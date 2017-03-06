import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import TextField from 'material-ui/TextField'

// Needed for onTouchTap. Can remove in future material-ui releases
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AddressSearch from '../containers/AddressSearch'
import DivisionListContainer from '../containers/DivisionListContainer'
import LayoutContainer from '../containers/LayoutContainer'
import LoginForm from './form/LoginForm'
import RegistrationForm from './form/RegistrationForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blue900 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900,
    accent1Color: blue900
  }
})

const Home = () => {
  return (
    <div>
      <AddressSearch />
      <DivisionListContainer />
    </div>
  )
}

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={LayoutContainer}>
          <Route path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
        </Route>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
