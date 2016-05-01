import React, { PropTypes, Component } from 'react'
import { reduxForm, addArrayValue } from 'redux-form'
import { Snippet } from './Snippet'
import { Markdown } from './Markdown'
import Preview from './Preview'

const components = {
  snippet: Snippet,
  markdown: Markdown
}

class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired
  }

  blocks() {
    const previewing = this.props.fields.preview.value
    if (previewing)
      return (
        <Preview blocks={this.props.fields.blocks} />
      )

    return this.props.fields.blocks.map((b, i) => {
      const Component = components[b.format.value]
      return (
        <div key={`blocks-${i}`}>
          <Component {...b} />
          <hr />
        </div>
      )
    })
  }

  togglePreview() {
    const { preview } = this.props.fields
    preview.onChange(!preview.value)
  }

  render() {
    return (
      <form className='pure-form pure-form-stacked' onSubmit={this.props.handleSubmit}>
        {this.blocks()}
        <div className='button-list'>
          <button type='submit' className='pure-button button-success'>
            Submit
          </button>
          <a className='pure-button button-secondary' onClick={::this.togglePreview}>Preview</a>
        </div>
        <div className='button-list'>
          <a className='pure-button button-secondary' onClick={this.props.addSnippet}>Add Snippet</a>
          <a className='pure-button button-secondary' onClick={this.props.addMarkdown}>Add Markdown</a>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'post',
  fields: [
    'preview',
    'blocks[].format',
    'blocks[].text',
    'blocks[].language'
  ]
}, undefined, {
  addSnippet: () => addArrayValue('post', 'blocks', { format: 'snippet', language: 'jsx' }),
  addMarkdown: () => addArrayValue('post', 'blocks', { format: 'markdown' })
})(Form)
