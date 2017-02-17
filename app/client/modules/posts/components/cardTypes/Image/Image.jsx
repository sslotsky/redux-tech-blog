import React, { PropTypes } from 'react'

export default function Image({ url }) {
  return (
    <div className="image-card">
      <img src={url} />
    </div>
  )
}

