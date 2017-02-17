import React, { PropTypes, Component } from 'react'
import { TagBoxAsync } from 'react-tag-box'

export default class Tags extends Component {
  state = {
    selected: []
  }

  render() {
    const { search, input: tagIds } = this.props
    const { selected } = this.state

    const select = tag => {
      if (tag.value) {
        this.setState({ selected: selected.concat(tag) })
        tagIds.onChange(tagIds.value.concat(tag.value))
      } else {
        this.props.create(tag.label).then(t => {
          this.setState({ selected: selected.concat(t) })
          tagIds.onChange(tagIds.value.concat(t.value))
        })
      }
    }

    const remove = tag => {
      this.setState({ selected: selected.filter(t => t !== tag) })
      tagIds.onChange(tagIds.value.filter(id => id !== tag.value))
    }

    return (
      <div className="tags">
        <label>Tags</label>
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

