
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', function(table) {
    table.increments()
    table.string('name').notNullable().unique()
  }).createTable('posts_tags', function(table) {
    table.integer('post_id').unsigned()
    table.integer('tag_id').unsigned()
    table.foreign('post_id').references('posts.id')
    table.foreign('tag_id').references('tags.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts_tags').dropTable('tags')
};
