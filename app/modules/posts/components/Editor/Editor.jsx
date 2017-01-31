import React, { PropTypes } from 'react'
import { Field, FieldArray } from 'redux-form'
import { Save } from 'react-violet-forms'

import Snippet from '../..//Snippet'
import Markdown from '../..//Markdown'

const components = {
  snippet: Snippet,
  markdown: Markdown
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

export default function Editor({ toggle, ...rest }) {
  return (
    <div>
      <FieldArray
        name="blocks"
        component={renderBlocks}
      />
      <div className='button-list pull-right'>
        <Save {...rest} />
        <button onClick={toggle}>
          Preview
        </button>
      </div>
    </div>
  )
}

