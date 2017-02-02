import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk'
import routes from '../config/routes'
import reducer from './reducer'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer as App } from './App'
import DevTools from './DevTools'
import { authenticated, logout } from './modules/session/actions'
import PubSub from 'pubsub-js'

const router = routerMiddleware(browserHistory)
const store = createStore(
  reducer,
  compose(applyMiddleware(router, thunk), DevTools.instrument())
)

const serializedUser = window.localStorage.getItem('user')
if (serializedUser) {
  store.dispatch(authenticated(JSON.parse(serializedUser)))
}

PubSub.subscribe('session.expired', () => {
  store.dispatch(logout()).then(() => store.dispatch(push('/login')))
})

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <div>
      <DevTools />
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>
), document.getElementById("app"))
