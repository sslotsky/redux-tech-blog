import { bookshelf } from '../connection'

const { Model } = bookshelf

export default Model.extend({
  tableName: 'tags'
})

