import express from 'express';
import cors from 'cors';
import knex from './knex';
import bodyParser from 'body-parser';
import Router from './apiRoutes';
import serverConfig from './serverConfig'

const db = knex;
const app = express();
const port = serverConfig.port; //process.env.PORT || 3091;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const apiRoutes = Router(db);
app.use('/api/', cors(), apiRoutes);

app.get('/', function(req, res){
  res.send('Welcome to my API Server!');
});

app.listen(port, function(){
  console.log('API Server is running on  PORT: ' + port);
});
