import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import Preview from './Preview'
import Snippet from './Snippet'
import Markdown from './Markdown'

const components = {
  snippet: Snippet,
  markdown: Markdown
}

function renderBlock(member, index, fields) {
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

export default ({ fields, previewing }) => {
  if (previewing) {
    return (
      <Preview fields={fields} />
    )
  }

  return (
    <div>
      {fields.map(renderBlock)}
    </div>
  )
}
