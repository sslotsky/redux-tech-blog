import api from 'CLIENT/api'
import { SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'
import { expireAll } from 'violet-paginator'
import * as actionTypes from './actionTypes'

export function authenticated(user) {
  return { type: actionTypes.AUTHENTICATED, user }
}

export function logout() {
  return dispatch => api.session.logout().then(() => {
    dispatch({ type: actionTypes.LOGOUT })
    dispatch(push('/login'))
    dispatch(expireAll())
  })
}

export function authenticate(data) {
  return dispatch => api.session.authenticate(data).then(resp => {
    dispatch(authenticated(resp.data.user))
    dispatch(push('/'))
  }).catch(err => {
    throw new SubmissionError(err.response.data.errors)
  })
}
