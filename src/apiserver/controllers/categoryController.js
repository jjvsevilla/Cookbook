import knex from '../knex';

export const getCategoryAll = async (req, res) => {
  let query = await knex.from('category')
                      .select()
                      .then(function(rows){
                        res.json(rows);
                      })
                      .catch(function(err){
                        res.status(500).send(err);
                      });

}
