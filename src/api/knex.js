const config = require('./knexfile.js');
const env = 'development';
//const knex = require('knex')(config[env]);

// PostgreSQL
const dbconfig = {
	"postgres": {
		"db"       : "Cookbook",
		"user"     : "postgres",
		"password" : "123456abC",
		"host"     : "localhost"
	}
};

const connectionString	= "postgres://"+dbconfig.postgres.user+":"+dbconfig.postgres.password+"@"+dbconfig.postgres.host+"/"+dbconfig.postgres.db;
/*
let knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public'
});
*/
let knex = require('knex')({client: 'pg'});

module.exports = knex;