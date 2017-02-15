import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import { connect } from 'react-redux'
import * as actions from './actions'
import { loading } from 'CLIENT/shared/decorators'

export function renderAsset(asset, i, pick) {
  const click = () => pick(asset.url)

  return (
    <div onClick={click} key={i} className="gallery-image">
      <img src={asset.url} />
    </div>
  )
}

export class GalleryImage extends Component {
  state = {
    visible: false,
    imageUrl: undefined
  }

  componentDidMount() {
    this.props.load()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.stale && nextProps.stale) {
      nextProps.load()
    }
  }

  render() {
    const { visible, imageUrl } = this.state
    const { assets, page, loading, done, load } = this.props

    const img = imageUrl && (
      <img src={imageUrl} />
    )

    const pick = url => {
      this.setState({ imageUrl: url })
      this.setState({ visible: false })
    }

    const renderImage = (asset, index) => renderAsset(asset, index, pick)

    const list = assets.length ? (
      <div>
        {assets.map(renderImage)}
      </div>
    ) : (
      <h2>No images found...</h2>
    )

    const infiniteLoad = e => {
      const { scrollTop, scrollHeight } = this.gallery
      if (scrollTop + this.gallery.getBoundingClientRect().height >= scrollHeight) {
        if (!loading && !done) {
          load(page + 1)
        }
      }
    }

    const notice = loading && (
      <h3>Loading more results...</h3>
    )

    return (
      <div className="image-picker">
        {img}
        <div>
          <button onClick={() => this.setState({ visible: true })}>Click to choose image...</button>
          <Modal
            width="50%"
            effect="fadeInUp"
            visible={visible}
            onClickAway={() => this.setState({ visible: false })}
          >
            <div className="soft-half outset">
              <h2>Gallery</h2>
              <div ref={node => this.gallery = node} className="gallery" onScroll={infiniteLoad}>
                {list}
                {notice}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.content.toJS(),
  { load: actions.scroll }
)(loading(GalleryImage))
