import { Map } from 'immutable'
import { resolveEach } from 'redux-resolver'
import * as actionTypes from './actionTypes'

const initialState = Map({
  post: Map({
    blocks: [],
    tags: []
  })
})

function setPost(state, action) {
  return state.merge({ post: action.post })
}

export default resolveEach(initialState, {
  [actionTypes.FETCHED]: setPost
})
