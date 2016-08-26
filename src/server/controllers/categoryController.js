import knex from '../knex';

export const getCategoryAll = async (req, res) => { 
  let db = knex;
  let query = await db.from('category')
                      .select()
                      .then(function(rows){
                        res.json(rows);
                      })
                      .catch(function(err){
                        res.status(500).send(err);
                      });

}
