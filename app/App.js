import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Sidebar from './Sidebar'
import {Hello} from './Hello'
import '../style.scss'

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
      <div id='layout' className='pure-g'>
        <Sidebar />
        <div className='content pure-u-1 pure-u-md-3-4'>
          <div>
            <input type="text" onChange={::this.handleChange} />
            <Hello name={this.props.name} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.app.get('name')
  }
}

export const AppContainer = connect(mapStateToProps)(App);
