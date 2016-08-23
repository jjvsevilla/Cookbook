import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

const port = 3040;
const app = express();
const compiler = webpack(config);

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/server/knex.js'));
});
