import api from 'CLIENT/api'
import * as actionTypes from './actionTypes'

export function upload(files) {
  const formData = new FormData()
  files.forEach(f => {
    formData.append('images[]', f, f.name)
  })

  return () => api.assets.create(formData)
}

export function scroll(nextPage) {
  return dispatch => api.assets.getPage(nextPage).then(resp =>
    dispatch({ type: actionTypes.FETCHED, assets: resp.data.results })
  )
}
