
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assets', function(table) {
    table.increments()
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.string('url').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assets')
};
