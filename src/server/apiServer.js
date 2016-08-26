import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './apiRoutes';
import serverConfig from './serverConfig';

const app = express();
const port = serverConfig.port;

const apiRoutes = Router();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/',  apiRoutes);

app.get('/', function(req, res){
  res.send('Welcome to my API Server!');
});

app.listen(port, function(){
  console.log('API Server is running on  PORT: ' + port);
});
