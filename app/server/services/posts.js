import pg from '../connection'

export function create({ blocks, ...rest }) {
  const post = {
    blocks: JSON.stringify(blocks),
    ...rest
  }

  return pg('posts').insert(post).returning('*').then(resp => resp[0])
}
