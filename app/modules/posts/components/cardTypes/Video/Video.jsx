import React, { PropTypes } from 'react'
import Player from 'react-player'

export default function Video({ url }) {
  return (
    <div className="video-card">
      <Player
        url={url}
      />
    </div>
  )
}
