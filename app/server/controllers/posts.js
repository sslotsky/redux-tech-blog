import * as posts from '../services/posts'

export default function postsController(routes) {
  routes.post('/posts', (req, res) => {
    const post = {
      author_id: req.decoded.id,
      ...req.body
    }

    posts.create(post).then(post => res.json({ post }))
  })

  return routes
}
