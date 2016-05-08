import React, { Component, PropTypes } from 'react'
import { DragLayer } from 'react-dnd'

function collect(monitor) {
  return {
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}

const options = {
  arePropsEqual(props, otherProps) {
    debugger
  }
}

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '20%',
  height: '100%'
}

function getItemStyles(props) {
  var currentOffset = props.currentOffset
  if (!currentOffset) {
    return {
      display: 'none'
    }
  }

  var x = currentOffset.x
  var y = currentOffset.y
  var transform = 'translate(' + x + 'px, ' + y + 'px)'
  return {
    transform: transform,
    WebkitTransform: transform
  }
}

class CardDragLayer extends Component {
  static propTypes = {
    item: PropTypes.object
  }

  render() {
    const { item, isDragging } = this.props

    if (!isDragging)
      return false

    return (
      <div style={layerStyles}>
        <div className='drag-preview' style={getItemStyles(this.props)}>
          <i className='fa fa-hand-scissors-o fa-6'></i>
        </div>
      </div>
    )
  }
}

export default DragLayer(collect)(CardDragLayer)
