import express from 'express'

import { secureRoutes } from './auth/authenticator'
import * as users from './services/users'
import { posts, tags, assets, registerRoutes } from './controllers'

const getUser = users.lookup

const routes = {
  authorized: secureRoutes(express.Router(), { getUser }),
  open: express.Router()
}

registerRoutes(routes, posts, tags, assets)

export default routes
