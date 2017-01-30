import api from 'ROOT/api'
import { SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'

export function authenticate(data) {
  return dispatch => api.users.authenticate(data).then(() => {
    dispatch(push('/'))
  }).catch(err => {
    throw new SubmissionError(err.response.data.errors)
  })
}
