import api from 'ROOT/api'
import { SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'
import * as actionTypes from './actionTypes'

export function authenticated(user) {
  return { type: actionTypes.AUTHENTICATED, user }
}

export function logout() {
  return dispatch => api.session.logout().then(() =>
    dispatch({ type: actionTypes.LOGOUT })
  )
}

export function authenticate(data) {
  return dispatch => api.session.authenticate(data).then(resp => {
    dispatch(authenticated(resp.data))
    dispatch(push('/'))
  }).catch(err => {
    throw new SubmissionError(err.response.data.errors)
  })
}
