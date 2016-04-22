import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { AppContainer } from '../app/App'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} />
  </Router>
)

