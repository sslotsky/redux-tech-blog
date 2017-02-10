import React from 'react'
import { decorators } from 'violet-paginator'

export function Browse() {
  return (
    <h1>Browse Posts</h1>
  )
}

const Decorated = decorators.tabulate(Browse)

export default () => (
  <Decorated listId="posts" />
)
