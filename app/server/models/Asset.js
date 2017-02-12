import { bookshelf } from '../connection'
import User from './User'
import { required } from '../validation/rules'

const { Model } = bookshelf

const Asset = Model.extend({
  tableName: 'assets',
  user: function() {
    return this.belongsTo(User)
  },
  validate: function(book) {
    return book.factCheck(
      book.fact('url').required('URL cannot be blank!')
    )
  }
})

export default Asset

