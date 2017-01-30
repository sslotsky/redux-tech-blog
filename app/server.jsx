import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import template from './template'
import apiRoutes from './server/apiRoutes'

const app = express()
const port = 9999

app.use('/assets', express.static('assets'))
app.use('/fonts', express.static('assets/fonts'))

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

function handleRender(req, resp) {
  resp.send(template())
}

app.use('/api', apiRoutes);
app.use(handleRender)

app.listen(port)
