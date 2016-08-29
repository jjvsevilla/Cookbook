export default {
  client: 'pg',
  connection: {
    host     : 'localhost',
    port     : '1433', // '5432',
    user     : 'postgres',
    password : 'Cookbook123',
    database : 'cookbook'
  },
  acquireConnectionTimeout: 3000
};