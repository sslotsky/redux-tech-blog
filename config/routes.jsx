import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../app/App'
import { Index as Posts } from '../app/modules/posts/Index'
import EditProfile from '../app/modules/profile/Edit'
import New from '../app/modules/posts/New'
import Login from '../app/modules/session/components/Login/Login'

export default (
  <Route path="/" component={App}>
    {/*<IndexRoute component={Posts} />
    <Route path='profile' component={EditProfile} />
    <Route path='posts/new' component={New} />*/}
    <IndexRoute component={New} />
    <Route path="login" component={Login} />
  </Route>
)

