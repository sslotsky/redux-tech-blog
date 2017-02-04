import pg from '../connection'

export function create({ blocks, tag_ids: tagIds, ...rest }) {
  const post = {
    blocks: JSON.stringify(blocks),
    ...rest
  }

  return pg('posts').insert(post).returning('*').then(resp => {
    const [post] = resp
    const links = tagIds.map(id => ({
      tag_id: id,
      post_id: post.id
    }))

    return pg('posts_tags').insert(links).then(() => post)
  })
}
