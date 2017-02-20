import * as posts from 'SERVICES/posts'
import { ValidationException } from '../validation'

export default function postsController(routes) {
  const { authorized, open } = routes

  authorized.post('/posts', (req, res, next) => {
    const post = {
      author_id: req.currentUser.id,
      ...req.body
    }

    posts.create(post).then(p => res.json({ post: p })).catch(next)
  })

  authorized.patch('/posts/:id', (req, res, next) => {
    posts.update(req.params.id, req.body).then(p => res.json({ post: p })).catch(next)
  })

  open.get('/posts', (req, res) => {
    posts.list(req.query.page, req.query.pageSize).then(payload => res.json(payload))
  })

  open.get('/posts/:id', (req, res) => {
    posts.show(req.params.id).then(post => res.json(post))
  })

  return routes
}
