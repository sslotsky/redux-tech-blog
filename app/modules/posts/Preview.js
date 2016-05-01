import React, { PropTypes, Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/ruby/ruby'

class Snippet extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  options() {
    return {
      mode: this.props.language,
      theme: 'erlang-dark',
      readOnly: true,
      scrollbarStyle: 'null',
      viewportMargin: Infinity
    }
  }

  render() {
    return (
      <CodeMirror options={this.options()} value={this.props.text} />
    )
  }
}

class Markdown extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <ReactMarkdown source={this.props.text} />
    )
  }
}


class SnippetPreview extends Component {
  static propTypes = {
    language: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired
  }
  
  render() {
    return (
      <Snippet language={this.props.language.value} text={this.props.text.value} />
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

class Cards extends Component {
  static propTypes = {
    blocks: PropTypes.array.isRequired
  }

  cards() {
    return this.props.blocks.map((b, i) => {
      return (
        <div className='pure-u-1-5 card' key={`blocks-${i}`}>
          <Block block={b} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className='pure-g cards'>
        {this.cards()}
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
      <div className='pure-g'>
        <div className='pure-u-1'>
          <Cards {...this.props} />
        </div>
        <div className='pure-u-1'>
          <Blocks {...this.props} />
        </div>
      </div>
    )
  }
}

export default Preview
