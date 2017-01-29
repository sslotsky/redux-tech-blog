import React, { PropTypes, Component } from 'react'
import { Snippet, Markdown } from './Show'
import Cards from './Cards'

class SnippetPreview extends Component {
  static propTypes = {
    language: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired
  }

  options() {
    return {
      readOnly: true
    }
  }

  render() {
    return (
      <Snippet
        options={this.options()}
        language={this.props.language.value}
        text={this.props.text.value} />
    )
  }
}

class MarkdownPreview extends Component {
  static propTypes = {
    text: PropTypes.object.isRequired
  }
  
  render() {
    return (
      <Markdown text={this.props.text.value} />
    )
  }
}

const components = {
  snippet: SnippetPreview,
  markdown: MarkdownPreview
}

class Block extends Component {
  static propTypes = {
    block: PropTypes.object.isRequired
  }

  render() {
    const { block } = this.props
    const Component = components[block.format.value]
    return (
      <Component {...block} />
    )
  }
}

class Blocks extends Component {
  static propTypes = {
    blocks: PropTypes.array.isRequired
  }

  blocks() {
    return this.props.blocks.map((b, i) => {
      return (
        <div className='preview' key={`blocks-${i}`}>
          <Block block={b} />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.blocks()}
      </div>
    )
  }
}

class Preview extends Component {
  static propTypes = {
    blocks: PropTypes.array.isRequired
  }

  render() {
    return (
      <section className='preview row'>
        <aside className='soft-quarter'>
          <Cards {...this.props} />
        </aside>
        <article className='col-1 soft-quarter'>
          <Blocks {...this.props} />
        </article>
      </section>
    )
  }
}

export default Preview
