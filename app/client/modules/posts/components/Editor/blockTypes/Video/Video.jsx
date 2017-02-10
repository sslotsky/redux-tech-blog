import React from 'react'
import { Field } from 'redux-form'
import { FormInput } from 'react-violet-forms'

export default function Video(props) {
  return (
    <fieldset className="soft-half">
      <h3>Video</h3>
      <Field
        name={`${props.input.name}.url`}
        component={FormInput}
        label="Video URL:"
      />
    </fieldset>
  )
}
