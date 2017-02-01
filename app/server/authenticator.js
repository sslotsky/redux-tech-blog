import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import cors from 'cors'
import Tokens from 'csrf'

const SECRET = 'yaybourbon'
const tokens = new Tokens()

export function secureRoutes(routes, options) {
  const csrfSecret = tokens.secretSync()

  routes.use(cors({ origin: 'http://localhost:3000', credentials: true }))

  routes.use((req, res, next) => {
    const token = tokens.create(csrfSecret)
    res.cookie('XSRF-TOKEN', token)
    next()
  })

  routes.post('/authenticate', (req, res) => {
    const { username, password } = req.body

    options.getUser(username).then(user => {
      if (!user) {
        res.status(404).json({ errors: { username: ['User does not exist'] } })
      } else if (!bcrypt.compareSync(password, user.password)) {
        res.status(422).json({ errors: { password: ['Password incorrect'] } })
      } else {
        const { password: _, ...rest } = user
        const token = jwt.sign(user, SECRET, { expiresIn: '24h' })
        res.cookie('auth-token', token, { httpOnly: true }).json({ token, user: rest })
      }
    })
  })

  routes.use((req, res, next) => {
    const token = req.body['auth-token'] || req.cookies['auth-token']
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

  routes.use((req, res, next) => {
    const token = req.headers['x-xsrf-token']
    if (!tokens.verify(csrfSecret, token)) {
      return res.status(403).json({ message: 'Invalid CSRF token' })
    }

    next()
  })

  routes.get('/logout', (req, res) => {
    res.clearCookie('auth-token')
    return res.status(200).json({ message: 'Logout successful' })
  })

  return routes
}
