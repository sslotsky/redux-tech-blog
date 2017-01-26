import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import routes from '../config/routes'
import reducer from './reducer'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer as App } from './App'

const router = routerMiddleware(browserHistory)
const createStoreWithMiddleware = applyMiddleware(router)(createStore)
const store = createStoreWithMiddleware(reducer)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <div>
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  </div>
), document.getElementById("app"))
