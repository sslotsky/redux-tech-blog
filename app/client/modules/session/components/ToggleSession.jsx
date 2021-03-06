import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { logout } from '../actions'

export function ToggleSession({ authenticated, navigate, signout }) {
  const login = () => navigate('/login')

  if (authenticated) {
    return (
      <button onClick={signout}>Logout</button>
    )
  }

  return (
    <button onClick={login}>Login</button>
  )
}

export default connect(
  state => ({
    authenticated: !state.session.get('user').isEmpty()
  }),
  { navigate: push, signout: logout }
)(ToggleSession)
