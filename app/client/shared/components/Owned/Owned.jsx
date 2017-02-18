import React from 'react'
import { connect } from 'react-redux'

export function Owned({ owned, children }) {
  if (owned) {
    return children
  }

  return false
}

export default connect(
  (state, ownProps) => ({ owned: ownProps.id === state.session.getIn(['user', 'id']) })
)(Owned)
