import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

import MaterializeSelectInput from '../common/MaterializeSelectInput';
import MaterializeClassSelectInput from '../common/MaterializeClassSelectInput';

const RecipeForm = ({recipe, allCategories, onSave, onChange, saving, errors}) => {
  return (
    <form className="col s12">
      <h1>Manage Recipe</h1>
      <div className="row">
        <TextInput
          name="recipeName"
          label="recipeName"
          value={recipe.recipeName}
          onChange={onChange}
          error={errors.title}/>
      </div>
      <div className="row">
        <MaterializeClassSelectInput
          name="categoryId"
          label="Category"
          value={recipe.categoryId}
          defaultOption="Select Category"
          options={allCategories}
          onChange={onChange} error={errors.categoryId}/>
      </div>
      <div className="row">
        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn"
          onClick={onSave}/>
      </div>
    </form>
  );
};

RecipeForm.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  allCategories: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default RecipeForm;
