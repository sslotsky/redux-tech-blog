import React, { PropTypes } from 'react'
import { TagBoxAsync } from 'react-tag-box'

function serverTag(tag) {
  return {
    name: tag.label,
    id: tag.value
  }
}

function clientTag(tag) {
  return {
    label: tag.name,
    value: tag.id
  }
}

export default function Tags({ search, input: tags, create }) {
  const select = tag => {
    if (tag.value) {
      tags.onChange(tags.value.concat(serverTag(tag)))
    } else {
      create(tag.label).then(t => {
        tags.onChange(tags.value.concat(serverTag(t)))
      })
    }
  }

  const remove = tag => {
    tags.onChange(tags.value.filter(id => id !== tag.value))
  }

  const selected = tags.value.map(clientTag)

  return (
    <div className="tags">
      <label>Tags</label>
      <TagBoxAsync
        fetch={search}
        selected={selected}
        onSelect={select}
        removeTag={remove}
      />
    </div>
  )
}

