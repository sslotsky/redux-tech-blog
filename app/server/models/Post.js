import { bookshelf } from '../connection'
import Tag from './Tag'
import { validator } from 'SERVER/validation'

const { Model } = bookshelf

const unique = (model, field) => {
  const values = model.toJSON()
  model.where({ [field]: values[field] }).fetchAll().then(records => {
    if (records.some(r => r.id !== values.id)) {
      throw 'Dups!'
    }
  })
}

const Post = Model.extend({
  tableName: 'posts',
  tags: function() {
    return this.belongsToMany(Tag)
  },
  validate: function(v) {
    return v.resolve(v.validate('title').unique())
  }
})

export default Post
