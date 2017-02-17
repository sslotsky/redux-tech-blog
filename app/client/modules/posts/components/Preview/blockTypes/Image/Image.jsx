import React from 'react'

export default function Image({ url }) {
  return (
    <div className="image-picker">
      <img src={url} />
    </div>
  )
}
