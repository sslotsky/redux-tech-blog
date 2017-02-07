import React, { PropTypes, Component } from 'react'
import { Field } from 'redux-form'
import Block from './Block'

function renderBlock(member, index, fields) {
  return (
    <Field
      name={member}
      component={Block}
      key={index}
    />
  )
}

export default function Blocks({ fields }) {
  return (
    <div>
      {fields.map(renderBlock)}
    </div>
  )
}

