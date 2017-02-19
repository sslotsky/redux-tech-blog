import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import multiparty from 'connect-multiparty'
import cors from 'cors'

import apiRoutes from './server/apiRoutes'
import renderClient from './serverRendering'

const app = express()
const port = 9999

app.use('/assets', express.static('assets'))
app.use('/fonts', express.static('assets/fonts'))

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(multiparty())
app.use(morgan('dev'))

app.use('/api', apiRoutes.open);
app.use('/api', apiRoutes.authorized);

app.use(renderClient)

app.listen(port)
