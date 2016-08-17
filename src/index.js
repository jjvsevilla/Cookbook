/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadCategories} from './actions/categoryActions';
import {loadRecipes} from './actions/recipeActions';

import './styles/styles.css'; //Webpack can import CSS files too!

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
//import '../node_modules/materialize-css/dist/js/materialize.min.js';

import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses()); //dispatch initial action in order to get initial data
store.dispatch(loadAuthors());
store.dispatch(loadCategories());
store.dispatch(loadRecipes());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);