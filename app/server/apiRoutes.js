import express from 'express'

import { secureRoutes } from './authenticator'
import pg from './connection'
import { posts, tags, registerRoutes } from './controllers'

function getUser(username) {
  return pg('users').first().where({ username })
}

const apiRoutes = secureRoutes(express.Router(), { getUser })
registerRoutes(apiRoutes, posts, tags)

export default apiRoutes
