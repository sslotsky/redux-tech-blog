import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { arraySwap } from 'redux-form'
import { Snippet, Markdown } from './Show'
import { DragSource, DropTarget } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { cardSource, cardTarget, collectSource, collectTarget } from './dragDropConfig'
import classnames from 'classnames'

function SnippetCard({ language, text }) {
  const options = {
    readOnly: true,
    scrollbarStyle: 'null',
    viewportMargin: Infinity
  }

  return(
    <Snippet
      options={options}
      language={language}
      text={text}
    />
  )
}

function MarkdownCard({ text }) {
  return (
    <div className='markdown-card'>
      <div className='card-content'>
        <Markdown text={text} />
      </div>
    </div>
  )
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
    input: PropTypes.object.isRequired,
    swap: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { connectDragPreview } = this.props
    connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    })
  }

  render() {
    const { isDragging, input, connectDragSource, connectDropTarget } = this.props
    const Component = components[input.value.format]
    const classes = classnames('card', {
      dragging: isDragging
    })

    return connectDragSource(connectDropTarget((
      <div className={classes}>
        <div className='card-header'>
          <div>
            <label>
              {input.value.format}
            </label>
          </div>
          <Component {...input.value} />
        </div>
      </div>
    )))
  }
}

const actions = {
  swap: (i, j) => arraySwap('post', 'blocks', i, j)
}

const Source = DragSource('card', cardSource, collectSource)(Card)
const Target = DropTarget('card', cardTarget, collectTarget)(Source)
export default connect(undefined, actions)(Target)
