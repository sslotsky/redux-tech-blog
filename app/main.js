import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistory, routeReducer } from 'redux-simple-router'
import { browserHistory } from 'react-router'
import routes from '../config/routes'
import appReducer from './reducer'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer as App } from './App'

const reducer = combineReducers({
  app: appReducer,
  routing: routeReducer
})

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
