var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  return knex('users').count('id').then(function(res) {
    var count = res[0].count

    if (parseInt(count, 10) === 0) {
      return knex('users').insert({ username: 'admin', password: bcrypt.hashSync('notmypassword', 10) })
    }
  })
};
