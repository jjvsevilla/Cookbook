import cfg from './knexConfig';

let knex = require('knex')(cfg);

module.exports = knex;

