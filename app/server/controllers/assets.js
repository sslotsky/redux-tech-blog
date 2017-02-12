import * as service from 'SERVER/services/assets'

export default function assetsController(routes) {
  routes.post('/assets', (req, res) => {
    service.upload(req.files.images, req.decoded.id).then(assets =>
      res.json({ assets })
    )
  })
}
