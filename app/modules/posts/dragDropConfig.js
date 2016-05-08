export const cardSource = {
  beginDrag(props) {
    return {
      index: props.index
    }
  }
}

export const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    if (dragIndex === hoverIndex)
      return

    props.swap(dragIndex, hoverIndex)
    monitor.getItem().index = hoverIndex;
  }
}

export function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

export function collectTarget(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}
