import React, { PropTypes, Component } from 'react'
import { Snippet, Markdown } from './Show'

class SnippetCard extends Component {
  options() {
    return {
      readOnly: true,
      scrollbarStyle: 'null',
      viewportMargin: Infinity
    }
  }

  render() {
    const { language, text } = this.props
    return(
      <Snippet
        options={this.options()}
        language={language.value}
        text={text.value} />
    )
  }
}

class MarkdownCard extends Component {
  render() {
    const { text } = this.props
    return (
      <div className='markdown-card'>
        <Markdown text={text.value} />
      </div>
    )
  }
}

const components = {
  snippet: SnippetCard,
  markdown: MarkdownCard
}

class Card extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
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

class CardList extends Component {
  static propTypes = {
    blocks: PropTypes.array.isRequired
  }

  cards() {
    return this.props.blocks.map((b, i) => {
      return (
        <div className='pure-u-1 card-container' key={`blocks-${i}`}>
          <div className='card'>
            <Card block={b} index={i} />
          </div>
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

export default CardList
