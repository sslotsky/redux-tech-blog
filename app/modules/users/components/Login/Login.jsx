import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormInput, Save } from 'react-violet-forms'
import { connect } from 'react-redux'
import { validator } from 'validate-this'

import { authenticate } from '../../actions'

export function Login(props) {
  return (
    <div className="login soft-half outset">
      <form onSubmit={props.handleSubmit}>
        <Field name="username" component={FormInput} label="Username" />
        <Field name="password" component={FormInput} label="Password" type="password" />
        <Save {...props} />
      </form>
    </div>
  )
}

const actions = { onSubmit: authenticate }

const required = val => (!val && 'Required') || undefined

const validate = values =>
  validator(values, v => {
    v.validate('username', 'password').satisfies(required)
  })

export default connect(undefined, actions)(
  reduxForm({
    form: 'login',
    validate
  })(Login)
)
