import pg from '../connection'
import Post from '../models/Post'
import Tag from '../models/Tag'

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

export function list(page = 1, pageSize = 10) {
  return Post.fetchPage({
    page,
    pageSize,
    withRelated: ['tags']
  }).then(resp => ({
    totalCount: resp.pagination.rowCount,
    results: resp.toJSON({ omitPivot: true })
  }))
}
