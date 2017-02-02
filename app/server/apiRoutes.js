import express from 'express'

import { secureRoutes } from './authenticator'
import pg from './connection'

function getUser(username) {
  return pg('users').first().where({ username })
}

const apiRoutes = secureRoutes(express.Router(), { getUser })

apiRoutes.post('/posts', (req, res) => {
  const { blocks, title } = req.body
  const post = {
    author_id: req.decoded.id,
    blocks: JSON.stringify(blocks),
    title
  }

  pg('posts').insert(post).returning('*').then(resp => res.json({ post: resp[0] }))
})

export default apiRoutes
