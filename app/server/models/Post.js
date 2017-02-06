import { bookshelf } from '../connection'
import Tag from './Tag'

const { Model } = bookshelf

export default Model.extend({
  tableName: 'posts',
  tags: function() {
    return this.belongsToMany(Tag)
  }
})
