import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cors from 'cors'
import Tokens from 'csrf'

import pg from './connection'

// TODO: move secret into a config
const SECRET = 'yaybourbon'
const tokens = new Tokens()
const csrfSecret = tokens.secretSync()

const apiRoutes = express.Router();

apiRoutes.use(cors({ origin: 'http://localhost:3000', credentials: true }))

apiRoutes.use((req, res, next) => {
  const token = tokens.create(csrfSecret)
  res.cookie('XSRF-TOKEN', token)
  next()
})

apiRoutes.post('/authenticate', (req, res) => {
  const { username, password } = req.body

  pg('users').where({ username }).then(users => {
    const [user] = users;
    if (!user) {
      res.status(404).json({ errors: { username: ['User does not exist'] } })
    } else if (!bcrypt.compareSync(password, user.password)) {
      res.status(422).json({ errors: { password: ['Password incorrect'] } })
    } else {
      const { password: _, ...rest } = user
      const token = jwt.sign(user, SECRET, { expiresIn: '24h' })
      res.cookie('auth-token', token, { httpOnly: true }).json(rest)
    }
  })
})

apiRoutes.use((req, res, next) => {
  const token = req.cookies['auth-token']
  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.status(403).json({ message: 'No token provided' })
  }
})

apiRoutes.use((req, res, next) => {
  const token = req.headers['x-xsrf-token']
  if (!tokens.verify(csrfSecret, token)) {
    return res.status(403).json({ message: 'Invalid CSRF token' })
  }

  next()
})

apiRoutes.get('/logout', (req, res) => {
  res.clearCookie('auth-token')
  return res.status(200).json({ message: 'Logout successful' })
})

export default apiRoutes
