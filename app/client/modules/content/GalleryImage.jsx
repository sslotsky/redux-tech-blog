import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import { connect } from 'react-redux'
import * as actions from './actions'

export function renderAsset(asset, i) {
  return (
    <div key={i} className="gallery-image">
      <img src={asset.url} />
    </div>
  )
}

export class GalleryImage extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
    this.props.scroll()
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ visible: true })}>Click to add image...</button>
        <Modal
          width="50%"
          effect="fadeInUp"
          visible={this.state.visible}
          onClickAway={() => this.setState({ visible: false })}
        >
          <div className="soft-half outset">
            <h2>Gallery</h2>
            <div>
              {this.props.assets.map(renderAsset)}
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default connect(
  state => state.content.toJS(),
  actions
)(GalleryImage)
