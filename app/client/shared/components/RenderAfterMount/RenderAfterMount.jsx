import React, { Component } from 'react'

export default class extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
    this.setState({ visible: true })
  }

  render() {
    if (!this.state.visible) {
      return false
    }

    return this.props.children
  }
}
