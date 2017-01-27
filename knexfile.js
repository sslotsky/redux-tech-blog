// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'redux_tech_blog',
    user: 'sam',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
