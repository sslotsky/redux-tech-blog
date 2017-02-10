import React from 'react'
import { Authenticated } from '../components'

export default function authenticated(Component) {
  return props => (
    <Authenticated>
      <Component {...props} />
    </Authenticated>
  )
}
