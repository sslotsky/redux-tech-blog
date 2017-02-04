import pg from '../connection'

export function search(name) {
  return pg('tags').where('name', 'ilike', `%${name}%`).then(tags => tags)
}

export function create(name) {
  return pg('tags').insert({ name }).returning('*').then(resp => resp[0])
}

