import * as actionTypes from './actionTypes'
import api from '../../api'

export function submit(data) {
  return dispatch => api.posts.create(data)
}
