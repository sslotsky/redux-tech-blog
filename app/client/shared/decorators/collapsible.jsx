import React from 'react'
import { Collapsible } from '../components'

export default function collapsible(select = () => ({})) {
  return Component => props => {
    const selected = select(props)

    return (
      <Collapsible {...props} {...selected}>
        <Component {...props} {...selected} />
      </Collapsible>
    )
  }
}
