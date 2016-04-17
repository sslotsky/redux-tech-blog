import React from 'react'
import ReactDOM from 'react-dom'
import {Hello} from './Hello'

class App extends React.Component {
  state = {
    message: 'universe'
  }

  handleChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={::this.handleChange} />
        <Hello name={this.state.message} />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
