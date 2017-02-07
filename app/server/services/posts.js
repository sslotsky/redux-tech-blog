import Post from 'MODELS/Post'

export function create({ blocks, tag_ids: tagIds, ...rest }) {
  const attributes = {
    blocks: JSON.stringify(blocks),
    ...rest
  }

  return Post.forge(attributes).save().tap(post => {
    return post.tags().attach(tagIds).then(() => post.refresh())
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
