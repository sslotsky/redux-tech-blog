import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import seedData from './seed'

class New extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired
  }

  handleSubmit(formData) {
    console.log(formData)
  }

  initialValues() {
    return { ...seedData, preview: true }
  }

  render() {
    return (
      <Form
        onSubmit={::this.handleSubmit}
        initialValues={this.initialValues()} />
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile.toJS()
  }
}

export default connect(mapStateToProps)(New)
