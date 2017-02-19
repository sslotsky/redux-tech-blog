import React, { PropTypes } from 'react'
import { Field, FieldArray } from 'redux-form'
import { FormInput, Save } from 'react-violet-forms'
import Tags from './Tags'
import AddBlockButton from './AddBlockButton'

import { Video, Image, Markdown, Snippet } from './blockTypes'

const components = {
  snippet: Snippet,
  markdown: Markdown,
  video: Video,
  image: Image
}

export function renderBlock(member, index, fields) {
  return (
    <div key={index} className="block-editor">
      <Field
        name={member}
        component={components[fields.get(index).format]}
        removeBlock={() => fields.remove(index)}
      />
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
  addSnippet,
  addBlock,
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
    addSnippet,
    addBlock
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
        name="tags"
        component={Tags}
        search={search}
        create={create}
      />
      <div className='button-list'>
        <AddBlockButton actions={actions} />
        <Save {...rest} />
        <button type="button" disabled={rest.invalid || rest.pristine} onClick={toggle}>
          Preview
        </button>
      </div>
    </div>
  )
}

