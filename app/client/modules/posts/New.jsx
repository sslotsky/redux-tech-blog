import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import * as actions from './actions'

function New({ profile, submit }) {
  return (
    <Form
      onSubmit={submit}
      initialValues={{ blocks: [] }}
    />
  )
}

function mapStateToProps(state) {
  return {
    profile: state.profile.toJS()
  }
}

export default connect(mapStateToProps, actions)(New)
