import { Map, List } from 'immutable'
import { resolveEach } from 'redux-resolver'
import * as actionTypes from './actionTypes'

const initialState = Map({
  post: Map({
    blocks: List(),
    tags: List()
  })
})

function setPost(state, action) {
  return state.merge({ post: action.post })
}

function clearPost() {
  return initialState
}

export default resolveEach(initialState, {
  [actionTypes.FETCHED]: setPost,
  [actionTypes.CLEAR]: clearPost
})
