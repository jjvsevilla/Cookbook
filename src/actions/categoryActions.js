import CategoryApi from '../api/mockCategoryApi';
import * as types from './actionTypes';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
import superagent from 'superagent';
import apiConfig from './apiConfig';

export function loadCategoriesSuccess(categories) {
  return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
  return dispatch => {
    dispatch(beginAjaxCall());
    superagent
      .get(`${apiConfig.apiHost}/category`)
      .end(function(err, res){  
        if (err || !res.ok) {
          dispatch(ajaxCallError());
          throw(err);          
        }else{
          dispatch(loadCategoriesSuccess(res.body));
        }        
      });
  };
}
