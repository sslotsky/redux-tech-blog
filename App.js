import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Hello} from './Hello'

class App extends React.Component {
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
    name: state.get('name')
  }
}

export const AppContainer = connect(mapStateToProps)(App);
