import React from 'react'
import { Field } from 'redux-form'
import { FormInput } from 'react-violet-forms'
import { collapsible } from 'SHARED/decorators'
import { CloseWindow } from 'SHARED/components'

export function Video(props) {
  return (
    <fieldset className="soft-half relative">
      <CloseWindow close={props.removeBlock} />
      <h3>Video</h3>
      <Field
        name={`${props.input.name}.url`}
        component={FormInput}
        label="Video URL:"
      />
    </fieldset>
  )
}

export default collapsible(ownProps => ({
  title: 'Video'
}))(Video)
