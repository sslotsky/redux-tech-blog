import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import pg from './connection'

// TODO: move secret into a config
const SECRET = 'yaybourbon'

const apiRoutes = express.Router();

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

export default apiRoutes
