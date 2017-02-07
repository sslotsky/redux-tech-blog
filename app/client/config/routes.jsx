import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'CLIENT/App'
import { Index as Posts } from 'MODULES/posts/Index'
import EditProfile from 'MODULES/profile/Edit'
import New from 'MODULES/posts/New'
import Login from 'MODULES/session/components/Login/Login'

export default (
  <Route path="/" component={App}>
    {/*<IndexRoute component={Posts} />
    <Route path='profile' component={EditProfile} />
    <Route path='posts/new' component={New} />*/}
    <IndexRoute component={New} />
    <Route path="login" component={Login} />
  </Route>
)

