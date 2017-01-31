import express from 'express'

import { secureRoutes } from './authenticator'
import pg from './connection'

function getUser(username) {
  return pg('users').first().where({ username })
}

export default secureRoutes(express.Router(), { getUser })
