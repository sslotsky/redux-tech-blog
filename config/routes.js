import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from '../app/App'
import { Index as Posts } from '../app/modules/posts/Index'
import EditProfile from '../app/modules/profile/Edit'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Posts} />
      <Route path='profile' component={EditProfile} />
    </Route>
  </Router>
)

