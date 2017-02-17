import React, { PropTypes } from 'react'
import { Field, FieldArray } from 'redux-form'
import { FormInput, Save } from 'react-violet-forms'
import Tags from './Tags'
import AddBlockButton from './AddBlockButton'

import Snippet from 'POSTS/Snippet'
import Markdown from 'POSTS/Markdown'
import { Video } from './blockTypes'

const components = {
  snippet: Snippet,
  markdown: Markdown,
  video: Video
}

export function renderBlock(member, index, fields) {
  return (
    <div key={index}>
      <Field
        name={member}
        component={components[fields.get(index).format]}
      />
      <hr />
    </div>
  )
}

export function renderBlocks({ fields }) {
  return (
    <div>
      {fields.map(renderBlock)}
    </div>
  )
}

export default function Editor({
  toggle,
  addMarkdown,
  addSnippet,
  addVideo,
  searchTags,
  createTag,
  ...rest
}) {
  const create = name => createTag(name).then(tag => ({
    label: tag.name, value: tag.id
  }))

  const search = name => searchTags(name).then(tags =>
    tags.map(t => ({ label: t.name, value: t.id }))
  )

  const actions = {
    addMarkdown,
    addSnippet,
    addVideo
  }

  return (
    <div className="soft-half inset">
      <Field
        name="title"
        component={FormInput}
        label="Title"
      />
      <FieldArray
        name="blocks"
        component={renderBlocks}
      />
      <Field
        name="tag_ids"
        component={Tags}
        search={search}
        create={create}
      />
      <div className='button-list'>
        <AddBlockButton actions={actions} />
        <Save {...rest} />
        <button type="button" onClick={toggle}>
          Preview
        </button>
      </div>
    </div>
  )
}

