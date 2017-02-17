import React from 'react'
import GalleryImage from 'MODULES/content/GalleryImage'

export default function Image({ input }) {
  const onPick = url => input.onChange({
    ...input.value,
    url
  })

  return (
    <div className="soft-quarter outset">
      <GalleryImage url={input.value.url} onPick={onPick} />
    </div>
  )
}
