import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { upload } from './actions'
import GalleryImage from './GalleryImage'

const filePreview = remove => (f, i) => {
  const click = e => {
    e.stopPropagation()
    remove(f)
  }

  return (
    <div key={i} className="image-preview">
      <div className="header">
        <button className="remove" onClick={click}><span>&times;</span></button>
      </div>
      <div>
        <img key={i} width={125} height={75} src={f.preview} />
      </div>
    </div>
  )
}

export class Content extends Component {
  state = {
    files: []
  }

  onDrop(acceptedFiles) {
    this.setState({ files: this.state.files.concat(acceptedFiles) })
  }

  render() {
    const { files } = this.state
    const { submit } = this.props

    const remove = file => {
      this.setState({ files: files.filter(f => f !== file) })
    }

    const onSubmit = e => {
      e.stopPropagation()
      submit(files)
    }

    const save = files.length > 0 && (
      <button onClick={onSubmit}>
        <i>✓</i>
        Save
      </button>
    )

    return (
      <div>
        <div className="soft-half outset">
          <Dropzone className='uploads' onDrop={files => this.onDrop(files)} accept="image/*">
            <h2>Click to upload files...</h2>
            <div>
              {files.map(filePreview(remove))}
            </div>
            <div className="soft-quarter">
              {save}
            </div>
          </Dropzone>
        </div>
        <div className="soft-half outset">
          <GalleryImage />
        </div>
      </div>
    )
  }
}

export default connect(undefined, { submit: upload })(Content)
