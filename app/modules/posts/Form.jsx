import React, { PropTypes, Component } from 'react'
import { reduxForm, addArrayValue, swapArrayValues } from 'redux-form'
import Snippet from './Snippet'
import Markdown from './Markdown'
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
        <Preview {...this.props} blocks={this.props.fields.blocks} />
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

  previewing() {
    return this.props.fields.preview.value
  }

  previewButtonText() {
    if (this.previewing())
      return 'Edit'

    return 'Preview'
  }

  buttonList() {
    if (this.previewing())
      return false

    return (
      <div>
        <a onClick={this.props.addSnippet}>Add Snippet</a>
        <a onClick={this.props.addMarkdown}>Add Markdown</a>
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.blocks()}
        <div className='button-list pull-right'>
          <button type='submit'>
            Submit
          </button>
          <button onClick={::this.togglePreview}>
            {this.previewButtonText()}
          </button>
        </div>
        {this.buttonList()}
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
  swap: (i, j) => swapArrayValues('post', 'blocks', i, j),
  addSnippet: () => addArrayValue('post', 'blocks', { format: 'snippet', language: 'jsx' }),
  addMarkdown: () => addArrayValue('post', 'blocks', { format: 'markdown' })
})(Form)
