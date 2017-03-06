import React from 'react'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
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
    <LayoutContainer>
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
      </Router>
    </LayoutContainer>
  )
}

export default App
