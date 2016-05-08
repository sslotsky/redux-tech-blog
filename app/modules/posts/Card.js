import React, { PropTypes, Component } from 'react'
import { Snippet, Markdown } from './Show'
import { DragSource, DropTarget } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { cardSource, cardTarget, collectSource, collectTarget } from './dragDropConfig'
import classnames from 'classnames'

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
        <div className='card-content'>
          <Markdown text={text.value} />
        </div>
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
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    block: PropTypes.object.isRequired,
    swap: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { connectDragPreview } = this.props
    connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    })
  }

  render() {
    const { isDragging, block, connectDragSource, connectDropTarget } = this.props
    const Component = components[block.format.value]
    const classes = classnames('card', {
      dragging: isDragging
    })

    return connectDragSource(connectDropTarget((
      <div className={classes}>
        <div className='card-header'>
          <div>
            <label>
              {block.format.value}
            </label>
          </div>
          <Component {...block} />
        </div>
      </div>
    )))
  }
}

const Source = DragSource('card', cardSource, collectSource)(Card)
export default DropTarget('card', cardTarget, collectTarget)(Source)
