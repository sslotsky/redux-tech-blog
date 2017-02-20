import * as service from 'SERVER/services/assets'

export default function assetsController(routes) {
  routes.authorized.post('/assets', (req, res) => {
    service.upload(req.files.images, req.currentUser.id).then(assets =>
      res.json({ assets })
    )
  })

  routes.authorized.get('/assets', (req, res) => {
    service.list(req.currentUser.id, req.query.page).then(payload => res.json(payload))
  })
}
