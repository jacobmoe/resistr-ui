import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// Needed for onTouchTap. Can remove in future material-ui releases
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AddressSearch from '../containers/AddressSearch'
import DivisionListContainer from '../containers/DivisionListContainer'
import Layout from './Layout'

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
    <Layout>
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
      </Router>
    </Layout>
  )
}

export default App
