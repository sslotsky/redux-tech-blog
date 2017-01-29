import React, { PropTypes, Component } from 'react'
import { Field } from 'redux-form'
import Card from './Card'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import CardDragLayer from './CardDragLayer'

function renderCard(member, index, fields) {
  return (
    <div className='card-container' key={index}>
      <Field
        name={member}
        component={Card}
        index={index}
        key={index}
      />
    </div>
  )
}

class CardList extends Component {
  render() {
    return (
      <div className='pure-g cards'>
        {this.props.fields.map(renderCard)}
        <CardDragLayer />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(CardList)
