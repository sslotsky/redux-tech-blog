
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.string('title').notNullable().unique()
    table.boolean('published').notNullable().defaultTo(false)
    table.jsonb('blocks').defaultTo(JSON.stringify([]))
    table.integer('author_id').unsigned()
    table.foreign('author_id').references('users.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
}
