import Immutable from 'immutable'
import { resolveEach } from 'redux-resolver'
import * as actionTypes from './actionTypes'

const initialState = Immutable.fromJS({
  user: {}
})

function authenticated(state, action) {
  return state.merge({ user: action.user })
}

function logout() {
  return initialState
}

export default resolveEach(initialState, {
  [actionTypes.AUTHENTICATED]: authenticated,
  [actionTypes.LOGOUT]: logout
})
