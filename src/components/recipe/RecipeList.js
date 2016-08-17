import React, {PropTypes} from 'react';
import RecipeItem from './RecipeItem';

//const CourseList = ({courses, deleteCourse}) => {
const RecipeList = ({recipes}) => {
  return (
    <div className="row">
      {recipes.map(recipe =>
        <RecipeItem key={recipe.id} recipe={recipe}/>
      )}    
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;
