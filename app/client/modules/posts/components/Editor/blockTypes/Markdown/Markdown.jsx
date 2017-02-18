import React from 'react'
import { Markdown as MD } from 'MODULES/posts/Show'
import { formField } from 'react-violet-forms'

export function Markdown({ input: { value, onChange, onBlur } }) {
  const focusChange = focused => {
    if (!focused) {
      onBlur(value)
    }
  }

  return (
    <MD text={value} onChange={onChange} onFocusChange={focusChange} />
  )
}

export default formField()(Markdown)
