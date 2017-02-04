import api from '../../api'

export function search(name) {
  return dispatch => api.tags.search(name).then(resp => resp.data.tags)
}

export function create(name) {
  return dispatch => api.tags.create(name).then(resp => resp.data.tag)
}
