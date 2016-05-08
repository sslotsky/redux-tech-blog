import React, { PropTypes, Component } from 'react'
import Card from './Card'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import CardDragLayer from './CardDragLayer'

class CardList extends Component {
  static propTypes = {
    blocks: PropTypes.array.isRequired
  }

  cards() {
    return this.props.blocks.map((b, i) => {
      return (
        <div className='pure-u-1 card-container' key={`cards-${i}`}>
          <Card {...this.props} block={b} index={i} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className='pure-g cards'>
        {this.cards()}
        <CardDragLayer />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(CardList)
