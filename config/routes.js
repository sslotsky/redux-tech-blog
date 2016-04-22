import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../app/App'
import EditProfile from '../app/modules/profile/Edit'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={EditProfile} />
    </Route>
  </Router>
)

