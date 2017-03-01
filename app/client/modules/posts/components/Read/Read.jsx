import React from 'react'
import { List } from 'immutable'
import { connect } from 'react-redux'
import loadPost from 'MODULES/posts/containers/PostLoader'

import { Snippet, Markdown } from 'POSTS/Show'
import { Video, Image } from 'POSTS/components/Preview/blockTypes'
import Tags from '../Tags/Tags'

const components = {
  snippet: Snippet,
  markdown: Markdown,
  video: Video,
  image: Image
}

function renderBlock(block, i) {
  const Block = components[block.get('format')]

  return (
    <div key={i} className="block">
      <Block {...block.toJS()} options={{ readOnly: true }} />
    </div>
  )
}

export function Read({ post }) {
  return (
    <div className="post soft-half">
      <h1 className="icon-toggle">
        {post.get('title')}
      </h1>
      <div>
        {post.get('blocks').map(renderBlock)}
      </div>
      <Tags tags={post.get('tags').toJS()} />
    </div>
  )
}

export default connect(
  state => ({ post: state.post.get('post') })
)(loadPost(Read))
