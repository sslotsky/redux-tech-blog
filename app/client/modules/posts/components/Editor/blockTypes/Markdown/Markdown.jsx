import React from 'react'
import { Markdown as MD } from 'MODULES/posts/Show'

export default function Markdown({ input: { value, onChange, onBlur }, meta: { touched, error } }) {
  const errors = touched && error && error.map((message, i) => (
    <p className="error" key={i}>{message}</p>
  ))

  const focusChange = focused => {
    if (!focused) {
      onBlur(value)
    }
  }

  return (
    <div className="form-group">
      <label>
        Text
        <MD text={value} onChange={onChange} onFocusChange={focusChange} />
        {errors}
      </label>
    </div>
  )
}
