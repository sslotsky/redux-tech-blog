import React, { PropTypes } from 'react'
import { Field, FieldArray } from 'redux-form'
import { Save } from 'react-violet-forms'

import BlockPreview from '../../Preview'

const Title = ({ input }) => (
  <h1 className="post-title">{input.value}</h1>
)

export default function Preview({ toggle, ...rest }) {
  return (
    <div>
      <Field
        name="title"
        component={Title}
      />
      <FieldArray
        name="blocks"
        component={BlockPreview}
      />
      <div className='button-list pull-right'>
        <Save {...rest} />
        <button onClick={toggle}>
          Edit
        </button>
      </div>
    </div>
  )
}


