import React, { PropTypes } from 'react'
import { Field, FieldArray } from 'redux-form'
import { Save } from 'react-violet-forms'

import BlockPreview from '../../Preview'

export default function Preview({ toggle, ...rest }) {
  return (
    <div>
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


