import Tag from '../models/Tag'

export function search(name) {
  return Tag.where('name', 'ilike', `%${name}%`).fetchAll()
}

export function create(name) {
  return Tag.forge({ name }).save()
}

