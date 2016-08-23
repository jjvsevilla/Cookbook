import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

import MaterializeTextInputWithIcon from '../common/MaterializeTextInputWithIcon';
import MaterializeTextInput from '../common/MaterializeTextInput';
import MaterializeTextAreaInput from '../common/MaterializeTextAreaInput';
import MaterializeSelectInput from '../common/MaterializeSelectInput';
import BackButton from '../common/BackButton';
import SaveFormButton from '../common/SaveFormButton';
import NavigatorPageLinks from '../common/NavigatorPageLinks';
import IngredientList from './IngredientList';

const RecipeForm = ({recipe, allCategories, onSave, onChange, saving, errors, addIngredient, updateIngredient, removeIngredient}) => {
  const pageTabs = [
    { "navID": "RecipeName", "navName": "Recipe Name" },
    { "navID": "Category", "navName": "Category" },
    { "navID": "Chef", "navName": "Chef" },
    { "navID": "Ingredients", "navName": "Ingredients" },
    { "navID": "Preparation", "navName": "Preparation" },
    { "navID": "SaveForm", "navName": "Save" }
  ];
  return (
    <div className="row">
      <form className="col s9 m10">
        <h3>Manage Recipe</h3>
        <br />
        <div className="row">
          <MaterializeTextInputWithIcon
            NavId="RecipeName"
            name="recipeName"
            label="Recipe Name"
            value={recipe.recipeName}
            onChange={onChange}
            error={errors.title}
            iconName="assignment"/>
        </div>
        <div className="row">
          <MaterializeSelectInput
            NavId="Category"
            name="categoryId"
            label="Category"
            value={recipe.categoryId}
            defaultOption="Select Category"
            options={allCategories}
            onChange={onChange} error={errors.categoryId}/>
        </div>
        <div className="row">
          <MaterializeTextInputWithIcon
            NavId="Chef"
            name="chef"
            label="Chef"
            value={recipe.chef}
            onChange={onChange}
            error={errors.chef}
            iconName="account_circle"/>
        </div>
        <div>
          <IngredientList
            NavId="Ingredients"
            ingredients={recipe.ingredients}
            name="ingredients"
            label="Ingredients"
            addIngredient={addIngredient}
            updateIngredient={updateIngredient}
            removeIngredient={removeIngredient}/>
        </div>
        <div className="row">
          <MaterializeTextAreaInput
            NavId="Preparation"
            name="preparation"
            label="Preparation"
            value={recipe.preparation}
            onChange={onChange}
            error={errors.preparation}/>
        </div>
        <div className="row">
            <BackButton classes="waves-effect waves-light btn"/>
            &nbsp;
            <SaveFormButton NavId="SaveForm" onSave={onSave} saving={saving} classes="waves-effect waves-light btn red" />
        </div>
      </form>
      <div className="col s3 m2">
        <NavigatorPageLinks pageTabs={pageTabs} />
      </div>
    </div>
  );
};

RecipeForm.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  allCategories: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
  addIngredient: React.PropTypes.func.isRequired,
  updateIngredient: React.PropTypes.func.isRequired,
  removeIngredient: React.PropTypes.func.isRequired
};

export default RecipeForm;
