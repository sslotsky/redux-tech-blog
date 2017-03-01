import React from 'react'
import { RenderAfterMount } from 'SHARED/components'

export default function renderAfterMount(Component) {
  return props => (
    <RenderAfterMount>
      <Component {...props} />
    </RenderAfterMount>
  )
}
