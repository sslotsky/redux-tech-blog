import { profile } from './modules/profile/reducers'
import session from './modules/session/reducer'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { createPaginator } from 'violet-paginator'

import { fetchPosts } from 'MODULES/posts/actions'

export default combineReducers({
  profile,
  routing,
  session,
  form: formReducer,
  posts: createPaginator({
    listId: 'posts',
    fetch: fetchPosts
  })
})
