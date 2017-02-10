import React from 'react'
import { connect } from 'react-redux'

export function Authenticated({ isAuthenticated, children }) {
  if (isAuthenticated) {
    return children
  }

  return false
}

export default connect(
  state => ({
    isAuthenticated: state.session.get('user').size > 0
  })
)(Authenticated)
