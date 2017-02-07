import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk'
import routes from 'CLIENT/config/routes'
import reducer from 'CLIENT/reducer'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import DevTools from 'CLIENT/DevTools'
import { authenticated, logout } from 'MODULES/session/actions'
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
