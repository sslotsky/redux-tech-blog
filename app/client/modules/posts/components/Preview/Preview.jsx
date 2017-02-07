import React, { PropTypes } from 'react'
import { Field, FieldArray } from 'redux-form'
import { Save } from 'react-violet-forms'

import Cards from 'POSTS/Cards'
import Blocks from './Blocks'

const Title = ({ input: { value: title } }) => (
  <h1 className="post-title">{title}</h1>
)

const BlockPreview = props => (
  <section className='preview pure-g'>
    <div className='soft-quarter pure-u-1-4'>
      <Cards {...props} />
    </div>
    <article className='pure-u-3-4 soft-quarter'>
      <Blocks {...props} />
    </article>
  </section>
)

export default function Preview({ toggle, ...rest }) {
  return (
    <div>
      <Field
        name="title"
        component={Title}
      />
      <FieldArray
        name="blocks"
        component={BlockPreview}
      />
      <div className='button-list pull-right'>
        <Save {...rest} />
        <button onClick={toggle}>
          Edit
        </button>
      </div>
    </div>
  )
}

