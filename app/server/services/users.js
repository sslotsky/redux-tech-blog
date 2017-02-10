import User from '../models/User'

export function lookup(username) {
  return User.where({ username }).fetch().then(user => user && user.toJSON())
}
