import React from 'react'
import { Snippet } from 'MODULES/posts/Show'
import { formField } from 'react-violet-forms'

export function SnippetField({ input: { value, onChange, onBlur }, language }) {
  const focusChange = focused => {
    if (!focused) {
      onBlur(value)
    }
  }

  return (
    <Snippet text={value} onChange={onChange} onFocusChange={focusChange} language={language} />
  )
}

export default formField()(SnippetField)

