import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import categories from './categoryReducer';
import recipes from './recipeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, // courses: courses // ES6 shorthand property name
    authors,
    categories,
    recipes,
    ajaxCallsInProgress
});

export default rootReducer;