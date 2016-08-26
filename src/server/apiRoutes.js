import express from 'express';
import * as categoryController from './controllers/categoryController';
import * as recipeController from './controllers/recipeController';

export default function Router(){  
      
  let router = express.Router();

  router.route('/category')
        .get(categoryController.getCategoryAll);

  router.route('/recipe')
        .get(recipeController.getRecipeAll)
        .post(recipeController.insertRecipe);
  
  router.route('/recipe/:id')
        .get(recipeController.getRecipe)
        .put(recipeController.updateRecipe)
        .delete(recipeController.deleteRecipe);

  router.route('/recipe/:id/ingredients')
        .get(recipeController.getIngredientsByRecipe);

  return router;
}