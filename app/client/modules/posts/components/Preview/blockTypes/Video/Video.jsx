import React, { PropTypes } from 'react'
import Player from 'react-player'

export default function Video({ url }) {
  return (
    <div className="video">
      <Player
        height="inherit"
        width="auto"
        url={url}
      />
    </div>
  )
}
