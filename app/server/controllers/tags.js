import * as tags from '../services/tags'

export default function tagsController(routes) {
  routes.get('/tags', (req, res) => {
    tags.search(req.query.name).then(tags => res.json({ tags }))
  })

  routes.post('/tags', (req, res) => {
    tags.create(req.body.name).then(tag => res.json({ tag }))
  })

  return routes
}
