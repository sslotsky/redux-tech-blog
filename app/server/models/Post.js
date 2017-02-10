import { bookshelf } from '../connection'
import Tag from './Tag'
import { unique, required } from '../validation/rules'

const { Model } = bookshelf

const Post = Model.extend({
  tableName: 'posts',
  tags: function() {
    return this.belongsToMany(Tag)
  },
  validate: function(book) {
    return book.factCheck(
      book.fact('title').satisfies(
        unique('Title already taken!'),
        required('Title cannot be blank!')
      )
    )
  }
})

export default Post
