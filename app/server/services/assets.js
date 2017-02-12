import s3 from 's3'
import fs from 'fs'

import client from 'SERVER/lib/s3'
import Asset from 'MODELS/Asset'

export function upload(files, userId) {
  const uploaders = files.map(f => {
    const [bucket, key] = ['slotsky.marmalade', `images/${f.name}`]
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
        Asset.forge({ url, user_id: userId }).save().then(resolve)

        fs.unlink(f.path, err => {
          if (err) {
            console.log(err)
          }
        })
      })
    })
  })

  return Promise.all(uploaders)
}
