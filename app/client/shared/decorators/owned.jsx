import React from 'react'
import { Owned } from '../components'

export default function owned(Component) {
  return props => (
    <Owned {...props}>
      <Component {...props} />
    </Owned>
  )
}
