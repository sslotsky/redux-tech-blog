import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, arrayPush, arraySwap, FieldArray } from 'redux-form'
import Snippet from './Snippet'
import Markdown from './Markdown'
import Preview from './Preview'
import Blocks from './Blocks'

const components = {
  snippet: Snippet,
  markdown: Markdown
}

class Form extends Component {
  //blocks() {
  //  const previewing = this.props.fields.preview.value
  //  if (previewing)
  //    return (
  //      <Preview {...this.props} blocks={this.props.fields.blocks} />
  //    )

  //  return this.props.fields.blocks.map((b, i) => {
  //    const Component = components[b.format.value]
  //    return (
  //      <div key={`blocks-${i}`}>
  //        <Component {...b} />
  //        <hr />
  //      </div>
  //    )
  //  })
  //}

  state = {
    preview: false
  }

  togglePreview() {
    const { preview } = this.state
    this.setState({ preview: !preview })
  }

  previewing() {
    return this.state.preview
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
        {/*this.blocks()*/}
        <FieldArray
          name="blocks"
          component={Blocks}
          previewing={this.state.preview}
        />
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

const actions = {
  addSnippet: () => arrayPush('post', 'blocks', { format: 'snippet', language: 'jsx' }),
  addMarkdown: () => arrayPush('post', 'blocks', { format: 'markdown' })
} 

export default reduxForm({
  form: 'post'
})(connect(undefined, actions)(Form))
