import { bookshelf } from '../connection'
import Tag from './Tag'

const { Model } = bookshelf

const Post = Model.extend({
  tableName: 'posts',
  tags: function() {
    return this.belongsToMany(Tag)
  },
  validate: function(book) {
    return book.factCheck(
      book.fact('title').unique('Title already taken!')
    )
  }
})

export default Post
