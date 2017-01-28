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
      res.status(404).json({ message: 'User not found' })
    } else if (!bcrypt.compareSync(password, user.password)) {
      res.status(422).json({ success: false, message: 'Wrong password' })
    } else {
      const { password: _, ...rest } = user
      const token = jwt.sign(user, SECRET, { expiresIn: '24h' })
      res.cookie('auth-token', token, { httpOnly: true }).json(rest)
    }
  })
})

export default apiRoutes
