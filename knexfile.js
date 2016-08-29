// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      host:     'localhost',
      port:     '5432', // '1433',
      database: 'cookbook',
      user:     'postgres',
      password: 'Cookbook123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: { tableName: 'knex_migrations' },
    seeds:      { directory: './seeds' }
};
