import path from 'path'
import express from 'express'
import template from './template'

const app = express()
const port = 9999

app.use('/assets', express.static('assets'));
app.use('/fonts', express.static('assets/fonts'));

app.use(handleRender)

function handleRender(req, resp) {
  resp.send(template())
}

app.listen(port)
