import cfg from './knexConfig';

let knex = require('knex')(cfg);

export default knex;