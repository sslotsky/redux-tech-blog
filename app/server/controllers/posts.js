import * as posts from 'SERVICES/posts'

export default function postsController(routes) {
  routes.post('/posts', (req, res) => {
    const post = {
      author_id: req.decoded.id,
      ...req.body
    }

    posts.create(post).then(p => res.json({ post: p })).catch(errors => {
      res.status(422).json({ errors })
    })
  })

  routes.get('/posts', (req, res) => {
    posts.list().then(payload => res.json(payload))
  })

  return routes
}
