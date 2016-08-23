import knex from './knex';

let list =  knex.select()
                .from('category')
                .map(function(row){
                  console.log(row);
                });
