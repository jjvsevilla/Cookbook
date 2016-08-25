import * as types from './actionTypes';
import recipeApi from '../api/mockRecipeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import request from 'superagent';
import apiConfig from './apiConfig';

export function loadRecipesSuccess(recipes) {
  return {type: types.LOAD_RECIPES_SUCCESS, recipes};
}

/*
export function getRecipesSuccess(recipes) {
  return {type: types.GET_RECIPE_SUCCESS, recipes};
}
*/

export function createRecipeSuccess(recipe) {
  return {type: types.CREATE_RECIPE_SUCCESS, recipe};
}

export function updateRecipeSuccess(recipe) {
  return {type: types.UPDATE_RECIPE_SUCCESS, recipe};
}

export function loadRecipes() {
  return function(dispatch){
    dispatch(beginAjaxCall()); 
    request
      .get(`${apiConfig.apiHost}/recipe`)
      .end(function(err, res){  
        if (err || !res.ok) {
          dispatch(ajaxCallError());
          //throw(err);          
        }else{
          dispatch(loadRecipesSuccess(res.body));
        }        
      });
  };
}

/*
export function getRecipe(id) {
  return function(dispatch){
    dispatch(beginAjaxCall());
    request
      .get(`${apiConfig.apiHost}/recipe/` + id)
      .end(function(err, res){  
        if (err || !res.ok) {
          dispatch(ajaxCallError());
          throw(err);          
        }else{
          dispatch(getRecipesSuccess(res.body));
        }        
      });

  };
}
*/

export function saveRecipe(recipe) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    let iniId=recipe.id;

    return new Promise((resolve, reject) => (    
      request
        .post(`${apiConfig.apiHost}/recipe`)
        .set('Content-Type', 'application/json')
        .send(recipe)
        .end(function(err, res){  
          if (err || !res.ok) {
            dispatch(ajaxCallError());
            reject(err);
            //throw(err);          
          } else {
            let savedRecipe = res.body;
            console.log(JSON.stringify(savedRecipe));
            dispatch(createRecipeSuccess(savedRecipe));
            resolve(savedRecipe);
          }      
        })
    ));

/*
    return recipeApi.saveRecipe(recipe)
    .then(savedRecipe => {
      iniId ? dispatch(updateRecipeSuccess(savedRecipe)) : dispatch(createRecipeSuccess(savedRecipe));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
*/   

  };
}