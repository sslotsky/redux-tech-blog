import express from 'express'

import { secureRoutes } from './authenticator'
import * as users from './services/users'
import { posts, tags, registerRoutes } from './controllers'

const getUser = users.lookup

const apiRoutes = secureRoutes(express.Router(), { getUser })
registerRoutes(apiRoutes, posts, tags)

export default apiRoutes
