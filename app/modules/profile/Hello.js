import React, { PropTypes, Component } from 'react';

export default class extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: 'universe'
  }

  render() {
    return <h1>Hello {this.props.name}!!</h1>
  }
}
