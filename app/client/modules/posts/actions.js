import * as actionTypes from './actionTypes'
import api from 'CLIENT/api'

export function submit(data) {
  return dispatch => api.posts.create(data)
}
