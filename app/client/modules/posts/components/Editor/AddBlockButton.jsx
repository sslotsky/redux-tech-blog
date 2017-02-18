import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import Flyout from 'CLIENT/shared/components/Flyout'

export default class AddBlockButton extends Component {
  state = {
    open: false
  }

  render() {
    const { addSnippet, addBlock } = this.props.actions;
    const close = action => () => {
      action()
      this.setState({ open: false })
    }

    const items = [{
      text: 'Add Snippet',
      children: [{
        text: 'JSX',
        onClick: close(addSnippet('jsx'))
      }, {
        text: 'Ruby',
        onClick: close(addSnippet('ruby'))
      }]
    }, {
      text: 'Add Markdown',
      onClick: close(addBlock('markdown'))
    }, {
      text: 'Add Video',
      onClick: close(addBlock('video'))
    }, {
      text: 'Add Image',
      onClick: close(addBlock('image'))
    }]

    const { open } = this.state
    const toggle = () => this.setState({ open: !open })
    const flyout = open && (
      <Flyout items={items} />
    )

    return (
      <div className="button-fly top">
        <button type="button" onClick={toggle}>Add Block</button>
        {flyout}
      </div>
    )
  }
}

