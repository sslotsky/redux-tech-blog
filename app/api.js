import axios from 'axios'

export const adapter = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  session: {
    authenticate: ({ username, password }) =>
      adapter.post('/authenticate', { username, password }).then(resp => {
        window.localStorage.setItem('user', JSON.stringify(resp.data))
        return resp
      }),
    logout: () => adapter.get('/logout').then(resp => {
      window.localStorage.removeItem('user')
      return resp
    })
  }
}
