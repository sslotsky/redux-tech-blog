import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import seedData from './seed'
import * as actions from './actions'

function New({ profile, submit }) {
  const initialValues = seedData

  return (
    <Form
      onSubmit={submit}
      initialValues={initialValues}
    />
  )
}

function mapStateToProps(state) {
  return {
    profile: state.profile.toJS()
  }
}

export default connect(mapStateToProps, actions)(New)
