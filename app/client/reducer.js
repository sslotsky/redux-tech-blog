import session from './modules/session/reducer'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { createPaginator } from 'violet-paginator'
import content from 'MODULES/content/reducer'
import post from 'MODULES/posts/reducer'
import { profile } from 'MODULES/profile/reducer'

import { fetchPosts } from 'MODULES/posts/actions'

export default combineReducers({
  profile,
  routing,
  session,
  form: formReducer,
  content,
  post,
  posts: createPaginator({
    listId: 'posts',
    fetch: fetchPosts
  })
})
