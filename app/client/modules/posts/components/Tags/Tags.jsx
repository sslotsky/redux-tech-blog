import React from 'react'

export default function Tags({ tags }) {
  const renderTag = (tag, i) => (
    <li key={i} className="tag">
      <span>{tag.name}</span>
    </li>
  )

  return (
    <ul className="tag-preview">
      {tags.map(renderTag)}
    </ul>
  )
}

