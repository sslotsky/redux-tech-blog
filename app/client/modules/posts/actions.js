import { SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'
import { composables } from 'violet-paginator'
import * as actionTypes from './actionTypes'
import api from 'CLIENT/api'

const pageActions = composables({ listId: 'posts' })

export function fetchPosts({ query }) {
  return () => api.posts.browse(query)
}

export function fetched(post) {
  return {
    type: actionTypes.FETCHED,
    post
  }
}

export function fetchPost(id) {
  return dispatch => api.posts.show(id).then(resp =>
    dispatch(fetched(resp.data))
  )
}

export function submit(data) {
  return dispatch => api.posts.create(data).then(() => {
    dispatch(pageActions.expire())
    dispatch(push('/'))
  }).catch(e => {
    throw new SubmissionError(e.response.data.errors)
  })
}

export function update(id, data) {
  return dispatch => api.posts.update(id, data).then(() => {
    dispatch(pageActions.expire())
    dispatch(push('/'))
  }).catch(e => {
    throw new SubmissionError(e.response.data.errors)
  })
}

export function clear() {
  return { type: actionTypes.CLEAR }
}
