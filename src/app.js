import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './components/App'

import { fetchBrowserCoords } from './actions/coords'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

store.dispatch(fetchBrowserCoords())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
