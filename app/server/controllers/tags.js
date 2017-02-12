import * as tags from '../services/tags'

export default function tagsController(routes) {
  const { authorized, open } = routes

  authorized.get('/tags', (req, res) => {
    tags.search(req.query.name).then(tags => res.json({ tags }))
  })

  open.post('/tags', (req, res) => {
    tags.create(req.body.name).then(tag => res.json({ tag }))
  })

  return routes
}
