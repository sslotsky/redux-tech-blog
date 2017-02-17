import Post from 'MODELS/Post'

export function create({ blocks, tags, ...rest }) {
  const attributes = {
    blocks: JSON.stringify(blocks),
    ...rest
  }

  return Post.forge(attributes).save().then(post => {
    return post.tags().attach(tags).then(() => post.refresh())
  })
}

export function show(id) {
  return Post.where({ id }).fetch({ withRelated: ['tags'] }).then(post =>
    post.toJSON({ omitPivot: true })
  )
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
