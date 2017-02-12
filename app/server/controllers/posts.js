import * as posts from 'SERVICES/posts'
import { ValidationException } from '../validation'

export default function postsController(routes) {
  const { authorized, open } = routes

  authorized.post('/posts', (req, res) => {
    const post = {
      author_id: req.decoded.id,
      ...req.body
    }

    posts.create(post).then(p => res.json({ post: p })).catch(e => {
      if (e instanceof ValidationException) {
        res.status(422).json({ errors: e.errors })
      } else {
        throw e
      }
    })
  })

  open.get('/posts', (req, res) => {
    posts.list().then(payload => res.json(payload))
  })

  return routes
}
