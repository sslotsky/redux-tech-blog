import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'CLIENT/App'
import EditProfile from 'MODULES/profile/Edit'
import New from 'MODULES/posts/New'
import Login from 'MODULES/session/components/Login/Login'
import Browse from 'MODULES/posts/components/Browse'

export default (
  <Route path="/" component={App}>
    {/*<IndexRoute component={Posts} />
    <Route path='profile' component={EditProfile} />
    <Route path='posts/new' component={New} />*/}
    <IndexRoute component={Browse} />
    <Route path='posts/new' component={New} />
    <Route path="login" component={Login} />
  </Route>
)

