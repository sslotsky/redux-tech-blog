import api from 'CLIENT/api'
import * as actionTypes from './actionTypes'

export function upload(files) {
  const formData = new FormData()
  files.forEach(f => {
    formData.append('images[]', f, f.name)
  })

  return dispatch => api.assets.create(formData).then(resp =>
    dispatch({ type: actionTypes.EXPIRE })
  )
}

export function scroll(nextPage = 1) {
  return dispatch => api.assets.getPage(nextPage).then(resp =>
    dispatch({ type: actionTypes.FETCHED, assets: resp.data.results })
  )
}
