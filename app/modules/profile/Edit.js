import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Hello from './Hello'

class Edit extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  handleChange(e) {
    this.props.dispatch({ type: 'NAME_UPDATED', name: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={::this.handleChange} />
        <Hello name={this.props.name} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.profile.get('name')
  }
}

export default connect(mapStateToProps)(Edit)
