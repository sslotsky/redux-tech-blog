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

  authorized.patch('/posts/:id', (req, res) => {
    posts.update(req.params.id, req.body).then(p => res.json({ post: p })).catch(e => {
      if (e instanceof ValidationException) {
        res.status(422).json({ errors: e.errors })
      } else {
        throw e
      }
    })
  })

  open.get('/posts', (req, res) => {
    posts.list(req.query.page, req.query.pageSize).then(payload => res.json(payload))
  })

  open.get('/posts/:id', (req, res) => {
    posts.show(req.params.id).then(post => res.json(post))
  })

  return routes
}
