import React, {PropTypes} from 'react';
import RecipeItem from './RecipeItem';
import MaterializeSelectFilterInput from '../common/MaterializeSelectFilterInput';
import MaterializeTextFilterInputWithIcon from '../common/MaterializeTextFilterInputWithIcon';

const RecipeList = ({recipes, categories, recipeNameFilter, categoryFilter, onChange}) => {
  let _recipes =
  recipes.filter((recipe) => { 
    return (recipe.recipeName.toUpperCase().includes(recipeNameFilter.toUpperCase()) || recipeNameFilter === "") &&
           (recipe.categoryId.toString() === categoryFilter || categoryFilter === ""); 
  });

  return (    
    <div className="col s12">
      <div className="row">
        <div className="col s6"> 
          <MaterializeTextFilterInputWithIcon
            NavId="RecipeName"
            name="recipeName"
            onChange={onChange}
            placeholder="Filter by Recipe Name"
            value={recipeNameFilter}
            iconName="assignment"/>    
        </div>
        <div className="col s6">
          <MaterializeSelectFilterInput
            NavId="Category"
            name="categoryId"
            value={categoryFilter}
            defaultOption="Select all"
            options={categories}
            onChange={onChange}/>
        </div>
      </div>
      <div className="row">
        {_recipes.map(recipe =>
          <RecipeItem key={recipe.id} recipe={recipe}/>
        )}
      </div>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  recipeNameFilter: PropTypes.string,
  categoryFilter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  updateRecipeNameFilter: PropTypes.func.isRequired  
};

export default RecipeList;
