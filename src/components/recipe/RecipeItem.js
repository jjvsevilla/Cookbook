import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const RecipeItem = ({recipe}) => {
  return (
    <div className="col s12 m6 l4">

      <div className="card hoverable small">
        <div className="card-image">
          <img className="responsive-img" src={recipe.imageUrl} title={recipe.recipeName} />
          <Link to={'/recipe/' + recipe.id}>
            <span className="card-title">{recipe.recipeName}</span>
          </Link>
        </div>
        <div className="card-content">
          <p className="truncate">{recipe.preparation}</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>

    </div>

  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeItem;
