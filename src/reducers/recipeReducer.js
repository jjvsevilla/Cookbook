import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipeReducer(state = initialState.recipes, action) {
  switch (action.type) {
    case types.LOAD_RECIPES_SUCCESS:
      return action.recipes;

    case types.GET_RECIPE_SUCCESS:
      return state;
/*
      return state.filter((recipe) => { 
        return recipe.id === action.recipes.id; 
      });
      //return action.recipes; // only 1      
*/
    case types.CREATE_RECIPE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.recipe)
      ];

    case types.UPDATE_RECIPE_SUCCESS: {
      let recipeIndex = state.findIndex(recipe => recipe.id == action.recipe.id);
      return state.map((recipe, index) => {
        if (index == recipeIndex) {
          return Object.assign({}, action.recipe);
        }
        return recipe;
      });
    }

    case types.DELETE_RECIPE_SUCCESS: {
      let recipeId = action.recipe;
      return state.filter((recipe) => { 
        return recipe.id != recipeId; 
      });
    }    

    default:
      return state;
  }
}
