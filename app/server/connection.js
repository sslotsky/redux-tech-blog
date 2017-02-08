import knex from 'knex'
import config from '../../knexfile'
import initialize from 'bookshelf'
import { validateThis } from './validation'

const pg = knex(config)

export const bookshelf = initialize(pg)
bookshelf.plugin('pagination')
bookshelf.plugin(validateThis)

