import React, { PropTypes } from 'react'
import { Snippet, Markdown } from 'POSTS/Show'
import { Video } from './blockTypes'

function SnippetPreview(props) {
  const options = {
    readOnly: true
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

export default function Block({ input }) {
  const Component = components[input.value.format]

  return (
    <Component {...input.value} />
  )
}

