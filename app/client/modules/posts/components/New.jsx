import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import * as actions from '../actions'

function New({ submit }) {
  return (
    <Form
      onSubmit={submit}
      initialValues={{ blocks: [], tags: [] }}
    />
  )
}

export default connect(undefined, actions)(New)
