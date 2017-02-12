import s3 from 's3'

export default s3.createClient({
  s3Options: {
    accessKeyId: process.env.MARMALADE_AWS_ACCESS,
    secretAccessKey: process.env.MARMALADE_AWS_SECRET,
    region: 'us-west-2'
  }
})
