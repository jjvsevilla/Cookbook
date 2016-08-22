import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const RecipeItem = ({recipe}) => {
  return (
    <div className="col s12 m6 l4">

      <div className="card sticky-action">

        <div className="card-image waves-effect waves-block waves-light">
          <img className="responsive-img recipe-preview-img" src={recipe.imageUrl} title={recipe.recipeName} />
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 fix">{recipe.recipeName}<i className="material-icons right">more_vert</i></span>
          <p className="truncate">{recipe.preparation}</p>
        </div>

        <div className="card-action">
          <Link to={'/recipe/' + recipe.id}>
            Edit this recipe
          </Link>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 fix">{recipe.recipeName}<i className="material-icons right">close</i></span>
          <p>{recipe.preparation}</p>
        </div>

      </div>

    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeItem;
