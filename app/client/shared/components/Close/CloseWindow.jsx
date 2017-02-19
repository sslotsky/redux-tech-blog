import React, { PropTypes } from 'react'

export default function CloseWindow({ close = () => {} }) {
  return (
    <button type="button" className="close-window" onClick={close}>
      &times;
    </button>
  )
}
