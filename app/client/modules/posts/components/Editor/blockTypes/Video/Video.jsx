import React from 'react'

export default function Video(props) {
  const { value: block } = props.input
  const input = {
    value: block.url,
    onChange: e => props.input.onChange({
      ...block,
      url: e.target.value
    })
  }

  return (
    <fieldset className="soft-half">
      <h3>Video</h3>
      <div className='form-group'>
        <label>Video URL:
          <input type="text" {...input} />
        </label>
      </div>
    </fieldset>
  )
}
