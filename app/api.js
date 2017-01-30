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
  users: {
    authenticate: ({ username, password }) =>
      adapter.post('/authenticate', { username, password })
  }
}
