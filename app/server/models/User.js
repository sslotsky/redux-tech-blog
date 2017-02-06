import { bookshelf } from '../connection'
import Post from './Post'

const { Model } = bookshelf

export default Model.extend({
  tableName: 'users',
  posts: function() {
    return this.hasMany(Post)
  }
})

