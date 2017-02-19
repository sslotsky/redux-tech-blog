import React from 'react'
import GalleryImage from 'MODULES/content/GalleryImage'
import { collapsible } from 'SHARED/decorators'
import { CloseWindow } from 'SHARED/components'

export function Image({ input, removeBlock }) {
  const onPick = url => input.onChange({
    ...input.value,
    url
  })

  return (
    <div className="soft-half outset relative">
      <CloseWindow close={removeBlock} />
      <GalleryImage url={input.value.url} onPick={onPick} />
    </div>
  )
}

export default collapsible(ownProps => ({
  title: 'Image'
}))(Image)
