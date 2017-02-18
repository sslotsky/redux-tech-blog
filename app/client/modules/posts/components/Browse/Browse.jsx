import React from 'react'
import { Link } from 'react-router'
import { decorators } from 'violet-paginator'

import { Snippet, Markdown } from 'POSTS/Show'
import { Video, Image } from 'POSTS/components/Preview/blockTypes'
import { owned } from 'SHARED/decorators'

function SnippetPreview(props) {
  const options = {
    readOnly: true,
    theme: 'neo',
    scrollbarStyle: 'null'
  }

  return (
    <Snippet
      options={options}
      {...props}
    />
  )
}

const components = {
  snippet: SnippetPreview,
  markdown: Markdown,
  video: Video,
  image: Image
}

const Edit = owned(({ post }) => (
  <Link to={`/posts/${post.get('id')}/edit`}>
    <i className="fa fa-pencil edit"></i>
  </Link>
))

export function renderPost(post, i) {
  const block = post.get('blocks').first().toJS();
  const Block = components[block.format]

  return (
    <div key={i}>
      <h2>
        {post.get('title')}
        <Edit id={post.get('author_id')} post={post} />
      </h2>
      <div className="list-preview">
        <Block {...block} />
      </div>
    </div>
  )
}

export function Browse({ results }) {
  return (
    <div className="soft-half">
      {results.map(renderPost)}
    </div>
  )
}

const Decorated = decorators.tabulate(Browse)

export default () => (
  <Decorated listId="posts" />
)
