import { SubmissionError } from 'redux-form'
import * as actionTypes from './actionTypes'
import api from 'CLIENT/api'

export function fetchPosts({ query }) {
  return () => api.posts.browse(query)
}

export function submit(data) {
  return dispatch => api.posts.create(data).catch(e => {
    throw new SubmissionError(e.response.data.errors)
  })
}
