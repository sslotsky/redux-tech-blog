import React, {PropTypes} from 'react';
 
export class Hello extends React.Component {
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
