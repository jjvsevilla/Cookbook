import express from 'express';
import {idToMMObjArrInsert, idToMMObjArrUpdate, arrToIngredientArr} from './util/helper';

export default function Router(db){  
  //category
  let getCategoryAll = async (req, res) => {    
    let query = await db.from('category')
                        .select()
                        .then(function(rows){
                          res.json(rows);
                        })
                        .catch(function(err){
                          res.status(500).send(err);
                        });
  }

  //ingredient
  let getIngredientsByRecipe = async (req, res) => {    
    let query = await db('ingredient as i')
                      .select(db.raw("i.id, i.name, i.amount"))
                      .joinRaw("JOIN ingredient_recipe ir on ir.ingredient_id=i.id AND ir.recipe_id=?",req.params.id)
                      .then(function(rows){
                        res.json(rows);
                      })
                      .catch(function(err){
                        res.status(500).send(err);
                      });
  }

  //recipe
  let getRecipeAll = async (req, res) => {    
    let query = await db.from('recipe')
                        .select()
                        .then(function(rows){
                          res.json(rows);
                        })
                        .catch(function(err){
                          res.status(500).send(err);
                        });
  }

  let getRecipeById = async (req, res) => {  
    let query = await db.from('recipe')
                        .where('id', req.params.id)
                        .select()
                        .then(function(rows){
                          res.json(rows);
                        })
                        .catch(function(err){
                          res.status(500).send(err);
                        });
  }

  let getRecipe = async (req, res) => {  
    let qrecipe = db.from('recipe')
                .where('id', req.params.id)
                .select()
                .first()
                .then();

    let qingredients = db('ingredient as i')
                      .select(db.raw("i.id, i.name, i.amount"))
                      .joinRaw("JOIN ingredient_recipe ir on ir.ingredient_id=i.id AND ir.recipe_id=?",req.params.id)
                      .then();

    let results = await Promise.all([qrecipe, qingredients]);
    let recipe = results[0];
    recipe.ingredients = results[1];
    return res.json(recipe); 
  }

  let insertRecipe = async (req, res) => {
    console.log("start insertRecipe!");
    let reqData = req.body;
    let ingredients = reqData.ingredients;
    delete reqData.ingredients;
    delete reqData.id;  
    //console.log(reqData);
    return await db.transaction(function (trx)
    {
      return trx
        .insert(reqData, 'id').into("recipe")
        .then(function (ids)
        {
          console.log("insert recipe success!");
          reqData.id = ids[0];
          if(ingredients.length) 
          { 
            return trx
              .insert(ingredients, 'id').into("ingredient")
              .then(function(ids)
              {     
                  console.log("insert ingredient success!");
                  let arrIngredientsRecipe = idToMMObjArrInsert("ingredient_id", ids, "recipe_id", reqData.id);
                  //console.log(arrIngredientsRecipe);
                  return trx.insert(arrIngredientsRecipe).into("ingredient_recipe"); 
              })
          }
        })
        .then(function()
        {
          console.log("finish insertRecipe!");
          return res.json(reqData);
        });
    }).catch(function(err) {
      console.error("error insertRecipe! " + err);
      res.status(500).send(err);
    });
  }

  let updateRecipe = async (req, res) => {
    console.log("start updateRecipe!");
    let reqData = req.body;
    var id = reqData.id;
    var newIngredientsIDs = reqData.ingredients;
    delete reqData.ingredients;
    delete reqData.id;  
    //console.log(reqData);

    var arrIngredientsRecipe;
    let qIngredients = db("ingredient_recipe").pluck('ingredient_id').where('recipe_id', id).then();

    return await Promise.all([qIngredients])
    .then(function(results){   
        arrIngredientsRecipe = idToMMObjArrUpdate(newIngredientsIDs, results[0], "ingredient_id", "recipe_id", id);
        console.log("filter arrIngredientsRecipe success!");
    })
    .then(function(){
      return db.transaction(function(trx)
      {
        return trx("recipe").where('id', id).update(reqData)
        .then(function(ids)
        {
          return trx("ingredient_recipe").whereIn('ingredient_id', arrIngredientsRecipe.del).andWhere('recipe_id', id).del()
          .then(function(){
            if(arrIngredientsRecipe.add.length) {
              let arrAux = arrToIngredientArr(arrIngredientsRecipe.add, "ingredient_id", "name", "amount");
              console.log(arrAux);
              
              return trx.insert(arrAux, 'id').into("ingredient")
              .then(function(ids){
                let arr = idToMMObjArrInsert("ingredient_id", ids, "recipe_id", id);
                return trx.insert(arr).into("ingredient_recipe")
                .then(function(){
                  console.log("finish update!");
                })
              })
            }
          })
        })
      })
    })
    .then(function(){
      console.log("finish updateRecipe!");
      return res.json(reqData);
    })
    .catch(function(err){
      console.error("error updateRecipe! " + err);
      res.status(500).send(err);
    });
  }

  let router = express.Router();

  router.route('/category')
        .get(getCategoryAll);

  router.route('/recipe')
        .get(getRecipeAll)
        .post(insertRecipe);
  
  /*
  router.route('/recipe/:id')
        .get(getRecipeById);
  */

  router.route('/recipe/:id')
        .get(getRecipe)
        .put(updateRecipe);  

  router.route('/recipe/:id/ingredients')
        .get(getIngredientsByRecipe);

  return router;
}