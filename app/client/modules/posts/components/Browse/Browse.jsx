import React from 'react'
import { decorators } from 'violet-paginator'

import { Snippet, Markdown } from 'POSTS/Show'
import { Video } from 'POSTS/components/Preview/blockTypes'

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
  video: Video
}

export function renderPost(post, i) {
  const block = post.get('blocks').first().toJS();
  const Block = components[block.format]

  return (
    <div key={i}>
      <h2>{post.get('title')}</h2>
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
