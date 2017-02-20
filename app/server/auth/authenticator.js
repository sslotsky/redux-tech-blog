import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import SECRET from './secret'

export function secureRoutes(routes, options) {
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

  routes.get('/logout', (req, res) => {
    res.clearCookie('auth-token')
    return res.status(200).json({ message: 'Logout successful' })
  })

  routes.use((req, res, next) => {
    if (req.authFailed) {
      return res.status(403).json({ message: 'Failed to authenticate token' })
    }

    if (!req.tokenProvided) {
      return res.status(403).json({ message: 'No token provided' })
    }

    next()
  })

  return routes
}
