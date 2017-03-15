import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { closeDrawer } from './actions/drawer';
import App from './components/App'
import { browserHistory } from 'react-router'

import { fetchBrowserCoords } from './actions/coords'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

// store.dispatch(fetchBrowserCoords())

browserHistory.listen(location => {
  store.dispatch(closeDrawer())
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
