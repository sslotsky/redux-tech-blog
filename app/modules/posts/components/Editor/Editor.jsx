import React, { PropTypes } from 'react'
import { Field, FieldArray } from 'redux-form'
import { FormInput, Save } from 'react-violet-forms'

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

export default function Editor({ toggle, addMarkdown, addSnippet, addVideo, ...rest }) {
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
      <div className='button-list'>
        <button type="button" onClick={addSnippet}>
          Add Snippet
        </button>
        <button type="button" onClick={addMarkdown}>
          Add Markdown
        </button>
        <button type="button" onClick={addVideo}>
          Add Video
        </button>
        <Save {...rest} />
        <button type="button" onClick={toggle}>
          Preview
        </button>
      </div>
    </div>
  )
}

