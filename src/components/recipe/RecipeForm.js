import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

import MaterializeTextInputWithIcon from '../common/MaterializeTextInputWithIcon';
import MaterializeTextInput from '../common/MaterializeTextInput';
import MaterializeTextAreaInput from '../common/MaterializeTextAreaInput';
import MaterializeSelectInput from '../common/MaterializeSelectInput';
import BackButton from '../common/BackButton';
import SaveFormButton from '../common/SaveFormButton';
import IngredientList from './IngredientList';

const RecipeForm = ({recipe, allCategories, onSave, onChange, saving, errors, addIngredient, updateIngredient, removeIngredient}) => {
  return (
    <form className="col s12">
      <h3>Manage Recipe</h3>
      <div className="row">
        <MaterializeTextInputWithIcon
          name="recipeName"
          label="Recipe Name"
          value={recipe.recipeName}
          onChange={onChange}
          error={errors.title}
          iconName="assignment"/>
      </div>
      <div className="row">
        <MaterializeSelectInput
          name="categoryId"
          label="Category"
          value={recipe.categoryId}
          defaultOption="Select Category"
          options={allCategories}
          onChange={onChange} error={errors.categoryId}/>
      </div>
      <div className="row">
        <MaterializeTextInputWithIcon
          name="chef"
          label="Chef"
          value={recipe.chef}
          onChange={onChange}
          error={errors.chef}
          iconName="account_circle"/>
      </div>
      <div>
        <IngredientList 
          ingredients={recipe.ingredients} 
          name="ingredients"
          label="Ingredients" 
          addIngredient={addIngredient}
          updateIngredient={updateIngredient}
          removeIngredient={removeIngredient}/>
      </div>
      <div className="row">
        <MaterializeTextAreaInput
          name="preparation"
          label="Preparation"
          value={recipe.preparation}
          onChange={onChange}
          error={errors.preparation}/>
      </div>
      <div className="row">
          <BackButton classes="waves-effect waves-light btn"/>
          &nbsp;
          <SaveFormButton onSave={onSave} saving={saving} classes="waves-effect waves-light btn red" /> 
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
