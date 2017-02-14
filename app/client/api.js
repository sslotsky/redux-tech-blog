import axios from 'axios'
import PubSub from 'pubsub-js'

export const adapter = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
})

adapter.interceptors.response.use(undefined, error => {
  if (error.response.status === 403) {
    PubSub.publish('session.expired')
  }

  return Promise.reject(error)
})

export default {
  session: {
    authenticate: ({ username, password }) =>
      adapter.post('/authenticate', { username, password }).then(resp => {
        window.localStorage.setItem('user', JSON.stringify(resp.data.user))
        return resp
      }),
    logout: () => adapter.get('/logout').then(resp => {
      window.localStorage.removeItem('user')
      return resp
    })
  },
  posts: {
    browse: query => adapter.get('/posts', { params: query }),
    create: data => adapter.post('/posts', data)
  },
  tags: {
    search: name => adapter.get('/tags', { params: { name } }),
    create: name => adapter.post('/tags', { name })
  },
  assets: {
    getPage: page => adapter.get('/assets', { params: { page } }),
    create: formData => adapter.post('/assets', formData)
  }
}
