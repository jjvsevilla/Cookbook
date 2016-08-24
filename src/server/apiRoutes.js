import express from 'express';

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

    console.log(JSON.stringify(recipe));

    return res.json(recipe); 


    // return Promise.all([qrecipe, qingredients]).then(function(results)
    // {
    //     var recipe = results[0];
    //     recipe.ingredients = results[1];
    //     return recipe; 
    // });

  }

  let router = express.Router();

  router.route('/category')
        .get(getCategoryAll);

  router.route('/recipe')
        .get(getRecipeAll);
  
  /*
  router.route('/recipe/:id')
        .get(getRecipeById);
  */
  router.route('/recipe/:id/ingredients')
        .get(getIngredientsByRecipe);
          

  router.route('/recipe/:id')
        .get(getRecipe);          

  return router;
}