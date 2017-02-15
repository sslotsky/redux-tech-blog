import React, { PropTypes, Component } from 'react'

export default class Loader extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired
  }

  state = {
    loading: false
  }

  refresh(...args) {
    this.setState({ loading: true })
    this.props.load(...args).then(resp => {
      this.setState({ loading: false })
      return resp
    })
  }

  render() {
    const props = {
      ...this.state,
      load: (...args) => this.refresh(...args)
    }

    return React.cloneElement(this.props.children, props)
  }
}
