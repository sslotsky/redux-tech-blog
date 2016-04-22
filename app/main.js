import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistory, } from 'redux-simple-router'
import { browserHistory } from 'react-router'
import routes from '../config/routes'
import reducer from './reducer'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer as App } from './App'

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer)

reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render((
  <div>
    <Provider store={store}>
      {routes}
    </Provider>
  </div>
), document.getElementById("app"))
