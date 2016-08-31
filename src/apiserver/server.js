import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import timeout from 'connect-timeout';
import Router from './routes';
import serverConfig from './serverConfig';

const app = express();
app.use(timeout('3s'));
const port = serverConfig.port;

const apiRoutes = Router();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(haltOnTimedout);
app.use('/api/',  apiRoutes);

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

app.get('/', function(req, res){
  res.send('Welcome to my API Server!');
});

app.listen(port, function(){
  console.log('API Server is running on  PORT: ' + port);
});