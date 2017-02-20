import jwt from 'jsonwebtoken'
import SECRET from './secret'

export function requestDecoder(req, res, next) {
  const token = req.body['auth-token'] || req.cookies['auth-token']
  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        req.authFailed = true
      } else {
        req.currentUser = decoded
      }

      next()
    })
  } else {
    req.tokenProvided = false
    next()
  }
}

