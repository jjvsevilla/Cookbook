import * as types from './actionTypes';
import recipeApi from '../api/mockRecipeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadRecipesSuccess(recipes) {
  return {type: types.LOAD_RECIPES_SUCCESS, recipes};
}

export function createRecipeSuccess(course) {
  return {type: types.CREATE_RECIPE_SUCCESS, course};
}

export function updateRecipeSuccess(course) {
  return {type: types.UPDATE_RECIPE_SUCCESS, course};
}

export function loadRecipes() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return recipeApi.getAllRecipes()
    .then(recipes => {
      dispatch(loadRecipesSuccess(recipes));
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function saveRecipe(recipe) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return recipeApi.saveRecipe(recipe)
    .then(savedRecipe => {
      recipe.id ? dispatch(updateRecipeSuccess(savedRecipe)) : dispatch(createRecipeSuccess(savedRecipe));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}