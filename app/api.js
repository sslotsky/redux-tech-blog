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
    create: data => adapter.post('/posts', data)
  }
}
