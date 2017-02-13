import s3 from 's3'
import fs from 'fs'

import client from 'SERVER/lib/s3'
import Asset, { Assets } from 'MODELS/Asset'

export function upload(files, userId) {
  const uploaders = files.map(f => {
    const [bucket, key] = ['slotsky.marmalade', `${userId}/assets/${f.name}`]
    const uploader = client.uploadFile({
      localFile: f.path,
      s3Params: {
        Bucket: bucket,
        Key: key
      }
    })

    return new Promise((resolve, reject) => {
      uploader.on('end', () => {
        const url = s3.getPublicUrl(bucket, key)
        resolve({ url, user_id: userId })

        fs.unlink(f.path, err => {
          if (err) {
            console.log(err)
          }
        })
      })
    })
  })

  return Promise.all(uploaders).then(assets =>
    Asset.query().where({ user_id: userId }).distinct('url').select().then(results => {
      const urls = results.map(r => r.url)
      const newAssets = assets.filter(a => !urls.includes(a.url))

      return Assets.forge(newAssets).invokeThen('save')
    })
  )
}
