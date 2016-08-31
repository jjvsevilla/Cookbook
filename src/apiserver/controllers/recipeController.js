import knex from '../knex';
import {MixArrWithIdToInsert, MixArrWithIdToInsertUpdate} from '../util/helper';

export const getRecipeAll = async (req, res) => {
  let query = await knex.from('recipe')
                      .select()
                      .then(function(rows){
                        res.json(rows);
                      })
                      .catch(function(err){
                        res.status(500).send(err);
                      });
};

export const getIngredientsByRecipe = async (req, res) => {
  let query = await knex.from('ingredient_recipe as i')
                    .where('i.recipe_id', req.params.id)
                    .select(knex.raw("i.id, i.name, i.amount"))
                    .then(function(rows){
                      res.json(rows);
                    })
                    .catch(function(err){
                      res.status(500).send(err);
                    });
};

export const getCommentsByRecipe = async (req, res) => {
  let query = await knex.from('comment_recipe as i')
                    .where('i.recipe_id', req.params.id)
                    .select(knex.raw("i.id, i.comment"))
                    .then(function(rows){
                      res.json(rows);
                    })
                    .catch(function(err){
                      res.status(500).send(err);
                    });
};

export const getRecipe = async (req, res) => {
  let qrecipe = knex.from('recipe')
              .where('id', req.params.id)
              .select()
              .first()
              .then();

  let qingredients = knex.from('ingredient_recipe as i')
                    .where('i.recipe_id', req.params.id)
                    .select(knex.raw("i.id, i.name, i.amount"))
                    .then();

let qcomments = knex.from('comment_recipe as c')
                    .where('c.recipe_id', req.params.id)
                    .select(knex.raw("c.id, c.comment"))
                    .then();

    return await Promise.all([qrecipe, qingredients, qcomments])
                .then(function(results){
                  let recipe = results[0];
                  recipe.ingredients = results[1];
                  recipe.comments = results[2];
                  return res.json(recipe);
                })
                .catch(function(err){
                  res.status(500).send(err);
                });
};

export const insertRecipe = async (req, res) => {
  //console.log("insertRecipe.Start");
  let reqData = req.body;
  let ingredients = reqData.ingredients;
  delete reqData.ingredients;
  delete reqData.id;

  return await knex.transaction(function (trx){
    return trx
      .insert(reqData, 'id').into("recipe")
      .then(function (ids){
        //console.log("insertRecipe.Start Header Success");
        reqData.id = ids[0];
        if(ingredients.length)
        {
          let arrIngredientsRecipe = MixArrWithIdToInsert(ingredients, "recipe_id", reqData.id);
          return trx
            .insert(arrIngredientsRecipe).into("ingredient_recipe")
            .then(function(){
              //console.log("insertRecipe.Start Detail Ingredients Success");
            });      
        }
      })
      .then(function(){
        //console.log("insertRecipe.Complete");
        return res.json(reqData);
      });
  }).catch(function(err){
    console.error("insertRecipe.Error " + err);
    res.status(500).send(err);
  });
};

export const updateRecipe = async (req, res) => {
  //console.log("updateRecipe.Start");
  let reqData = req.body;
  let id = reqData.id;
  let ingredients = reqData.ingredients;
  delete reqData.comments;
  delete reqData.ingredients;
  delete reqData.id;  

  return await knex.transaction(function(trx){
    return trx("recipe").where('id', id)
      .update(reqData)
      .then(function(){
        //console.log("updateRecipe.Start Header Success");
        return trx("ingredient_recipe").where('recipe_id', id)
            .del()
            .then(function(){
              //console.log("updateRecipe.Start Remove Old Ingredients Success");
              if(ingredients.length)
              {
                let arrIngredientsRecipe = MixArrWithIdToInsertUpdate(ingredients, "id", "recipe_id", id);
                return trx
                  .insert(arrIngredientsRecipe).into("ingredient_recipe")
                  .then(function(){                    
                    //console.log("updateRecipe.Start Add New Ingredients Success");   
                  })
                  .then(function(){
                    //console.log("updateRecipe.Start Add New Ingredients Success");
                  });
              }
          });
      })
      .then(function(){
        //console.log("updateRecipe.Complete " + id);
        reqData.id = id;
        return res.json(reqData);
      })
      .catch(function(err){
        //console.error("updateRecipe.Error " + err);
        res.status(500).send(err);
      });
  });
};

export const deleteRecipe = async (req, res) => {
  //console.log("deleteRecipe.Start");
  let id = req.params.id;
  return await knex.transaction(function (trx)
  {
    return trx("recipe").where('id', id)
      .del()
      .then(function(){
        //console.log("deleteRecipe.Complete " + id);
        return res.json(id);
      });
  }).catch(function(err) {
    //console.error("deleteRecipe.Error " + err);
    res.status(500).send(err);
  });
};

export const insertCommentByRecipe = async (req, res) => {
  //console.log("insertCommentByRecipe.Start");
  let id = req.params.id;
  let reqData = req.body;
  reqData.recipe_id = id;
  delete reqData.id;
  return await knex.transaction(function (trx){    
    return trx
      .insert(reqData, 'id').into("comment_recipe")
      .then(function (ids){
        reqData.id = ids[0];
        //console.log("insertCommentByRecipe.Start Detail Comments Success");
      })
      .then(function(){
        //console.log("insertCommentByRecipe.Complete");
        return res.json(reqData);
      });
  }).catch(function(err){
    //console.error("insertCommentByRecipe.Error " + err);
    res.status(500).send(err);
  });
};