import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
//import massive from 'massive';

/* eslint-disable no-console */
const port = 3040; // 3099 avantica port
const app = express();
const compiler = webpack(config);

/*
// PostgreSQL
const dbconfig = {
	"postgres": {
		"db"       : "Cookbook",
		"user"     : "postgres",
		"password" : "",
		"host"     : "localhost"
	}
};

const connectionString	= "postgres://"+dbconfig.postgres.user+":"+dbconfig.postgres.password+"@"+dbconfig.postgres.host+"/"+dbconfig.postgres.db;
let pg = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public'
});
//var massiveInstance		= massive.connectSync({connectionString : connectionString});
var db;
*/
let db  = require('../src/api/knex');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});