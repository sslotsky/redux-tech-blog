import React, { PropTypes, Component } from 'react'
import { TagBoxAsync } from 'react-tag-box'

export default class Tags extends Component {
  state = {
    selected: []
  }

  render() {
    const { search } = this.props
    const { selected } = this.state

    const select = tag => {
      if (tag.value) {
        this.setState({ selected: selected.concat(tag) })
      } else {
        this.props.create(tag.label).then(t => {
          this.setState({ selected: selected.concat(t) })
        })
      }
    }

    const remove = tag => this.setState({ selected: selected.filter(t => t !== tag) })

    return (
      <div className="tags">
        <TagBoxAsync
          fetch={search}
          selected={selected}
          onSelect={select}
          removeTag={remove}
        />
      </div>
    )
  }
}

