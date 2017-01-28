import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import knex from 'knex'
import config from '../knexfile'
import bcrypt from 'bcrypt'

import template from './template'

// TODO: move secret into a config
const SECRET = 'yaybourbon'
const app = express()
const port = 9999
const pg = knex(config)

app.use('/assets', express.static('assets'))
app.use('/fonts', express.static('assets/fonts'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

function handleRender(req, resp) {
  resp.send(template())
}

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
      const token = jwt.sign(rest, SECRET, { expiresIn: '24h' })
      res.cookie('auth-token', token, { httpOnly: true }).json(rest)
    }
  })
})

app.use('/api', apiRoutes);
app.use(handleRender)

app.listen(port)
