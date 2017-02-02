import React, { PropTypes, Component } from 'react'
import { Field } from 'redux-form'
import { Snippet, Markdown } from './Show'
import Cards from './Cards'

function SnippetPreview({ language, text }) {
  const options = {
    readOnly: true
  }

  return (
    <Snippet
      options={options}
      language={language}
      text={text}
    />
  )
}

const components = {
  snippet: SnippetPreview,
  markdown: Markdown
}

function Block({ input }) {
  const Component = components[input.value.format]

  return (
    <Component {...input.value} />
  )
}

function renderBlock(member, index, fields) {
  return (
    <Field
      name={member}
      component={Block}
      key={index}
    />
  )
}

function Blocks({ fields }) {
  return (
    <div>
      {fields.map(renderBlock)}
    </div>
  )
}

export default function Preview(props) {
  return (
    <section className='preview pure-g'>
      <div className='soft-quarter pure-u-1-4'>
        <Cards {...props} />
      </div>
      <article className='pure-u-3-4 soft-quarter'>
        <Blocks {...props} />
      </article>
    </section>
  )
}
