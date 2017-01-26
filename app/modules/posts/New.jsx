import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import seedData from './seed'

function New({ profile }) {
  const handleSubmit = formData  => {
    console.log(formData)
    return Promise.resolve(formData)
  }

  const initialValues = { ...seedData, preview: true }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
    />
  )
}

function mapStateToProps(state) {
  return {
    profile: state.profile.toJS()
  }
}

export default connect(mapStateToProps)(New)
