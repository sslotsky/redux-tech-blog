
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({ name: 'js' }),
        knex('tags').insert({ name: 'es6' })
      ]);
    });
};
