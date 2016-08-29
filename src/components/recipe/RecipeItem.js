import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const RecipeItem = ({recipe, confirmModalId, setDeleteRecipeId}) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="responsive-img recipe-preview-img" src={recipe.imageUrl} title={recipe.recipeName} />
        </div>
        <div className="card-content">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img className="valign" src={recipe.categoryIcon} title={recipe.categoryName} />
            </div>
            <div className="col s8">
              <span className="card-title activator grey-text text-darken-4 fix valign truncate">{recipe.recipeName}</span>
            </div>
            <div className="col s2">
              <span className="card-title activator grey-text text-darken-4 fix valign truncate"><i className="material-icons right">more_vert</i></span>
            </div>
          </div>
          <p className="truncate">{recipe.preparation}</p>
        </div>
        <div className="card-action link-router">
          <div className="row link-router valign-wrapper">
              <div className="col s4 valign center-align">
                <Link to={'/recipe/' + recipe.id}>
                  <i className="material-icons">mode_edit</i>
                </Link>
              </div>
              <div className="col s4 valign center-align">
                <Link to={'/recipe/' + recipe.id + '/comments'}>
                  <i className="material-icons">comments</i>
                </Link>
              </div>
              <div className="col s4 valign center-align">
                <a className="modal-trigger" href={'#' + confirmModalId} onClick={setDeleteRecipeId.bind(this, recipe.id, recipe.recipeName, recipe.imageUrl)}>
                  <i className="material-icons">delete</i>
                </a>
              </div>
          </div>
        </div>
        <div className="card-reveal">
          <div className="row valign-wrapper">
            <div className="col s10">
              <span className="card-title grey-text text-darken-4 fix">{recipe.recipeName}</span>
            </div>
            <div className="col s2">
              <span className="card-title grey-text text-darken-4 fix"><i className="material-icons right">close</i></span>
            </div>
          </div>
          <p>Chef: {recipe.chef}</p>
        </div>
      </div>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  confirmModalId: PropTypes.string,
  setDeleteRecipeId: PropTypes.func
};

export default RecipeItem;
