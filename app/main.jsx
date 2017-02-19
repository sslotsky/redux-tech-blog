import Immutable from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux'
import { Provider } from 'react-redux'
import PubSub from 'pubsub-js'

import './client/config/globalSettings'
import DevTools from 'CLIENT/DevTools'
import { authenticated, logout } from 'MODULES/session/actions'
import routes from 'CLIENT/config/routes'
import reducer from 'CLIENT/reducer'
import 'CLIENT/style.scss'

const router = routerMiddleware(browserHistory)

const { session, content, post, posts, ...rest } = window.__PRELOADED_STATE__

const state = {
  session: Immutable.fromJS(session),
  content: Immutable.fromJS(content),
  post: Immutable.fromJS(post),
  posts: Immutable.fromJS(posts),
  ...rest
}

const store = createStore(
  reducer,
  state,
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
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById("app"))

ReactDOM.render((
  <DevTools store={store} />
), document.getElementById("devtools"))
