import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../app/App'
import { Index as Posts } from '../app/modules/posts/Index'
import EditProfile from '../app/modules/profile/Edit'
import New from '../app/modules/posts/New'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Posts} />
    <Route path='profile' component={EditProfile} />
    <Route path='posts/new' component={New} />
  </Route>
)

