import React from 'react'
import Loader from '../components/Loader'

export default function loading(Component) {
  return props => (
    <Loader {...props}>
      <Component {...props} />
    </Loader>
  )
}
