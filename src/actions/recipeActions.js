import * as types from './actionTypes';
import recipeApi from '../api/mockRecipeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import superagent from 'superagent';
import apiConfig from './apiConfig';

export function loadRecipesSuccess(recipes) {
  return {type: types.LOAD_RECIPES_SUCCESS, recipes};
}

export function getRecipesSuccess(recipes) {
  return {type: types.GET_RECIPE_SUCCESS, recipes};
}

export function createRecipeSuccess(recipe) {
  return {type: types.CREATE_RECIPE_SUCCESS, recipe};
}

export function updateRecipeSuccess(recipe) {
  return {type: types.UPDATE_RECIPE_SUCCESS, recipe};
}

export function deleteRecipeSuccess(recipe){
  return {type: types.DELETE_RECIPE_SUCCESS, recipe};
}

export function loadRecipes() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    superagent
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

export function getRecipe(id) {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return new Promise((resolve, reject) => (
      superagent
        .get(`${apiConfig.apiHost}/recipe/` + id)
        .end(function(err, res){
          if (err || !res.ok) {
            dispatch(ajaxCallError());
            reject(err);
          } else {
            let recipe = res.body;
            dispatch(getRecipesSuccess(recipe));
            resolve(recipe);
          }
        })
    ));
  };
}

export function saveRecipe(recipe) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    let iniId=recipe.id;
    if(iniId){
      return new Promise((resolve, reject) => (
        superagent
          .put(`${apiConfig.apiHost}/recipe/` + iniId)
          .set('Content-Type', 'application/json')
          .send(recipe)
          .end(function(err, res){
            if (err || !res.ok) {
              if(err.response && err.response.body && err.response.body.constraint && err.response.body.constraint === "uq_recipe_recipename"){
                err.message = "The recipe name already exist! Try with another name.";  
              }
              dispatch(ajaxCallError());
              reject(err);
            } else {
              let savedRecipe = res.body;
              dispatch(updateRecipeSuccess(savedRecipe));
              resolve(savedRecipe);
            }
          })
      ));
    } else {
      return new Promise((resolve, reject) => (
        superagent
          .post(`${apiConfig.apiHost}/recipe`)
          .set('Content-Type', 'application/json')
          .send(recipe)
          .end(function(err, res){
            if (err || !res.ok) {              
              if(err.response && err.response.text && err.response.text.includes('uq_recipe_recipename')){
                err.message = "The recipe name already exist! Try with another name.";  
              }
              else if (err.response && err.response.text && err.response.text.includes('22P02')){
                err.message = "You must select a valid category.";  
              }
              dispatch(ajaxCallError());
              reject(err);
            } else {
              let savedRecipe = res.body;
              dispatch(createRecipeSuccess(savedRecipe));
              resolve(savedRecipe);
            }
          })
      ));
    }
  };
}

export function deleteRecipe(id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return new Promise((resolve, reject) => (
      superagent
        .del(`${apiConfig.apiHost}/recipe/` + id)
        .end(function(err, res){
          if (err || !res.ok) {
            dispatch(ajaxCallError());
            reject(err);
          } else {
            let deletedRecipeId = res.body;
            dispatch(deleteRecipeSuccess(deletedRecipeId));
            resolve(deletedRecipeId);
          }
        })
    ));

  };
}