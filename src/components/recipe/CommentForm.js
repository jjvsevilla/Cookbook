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
import CommentList from './CommentList';

const CommentForm = ({recipe, allCategories, onSave, onChange, saving, errors, 
                     addIngredient, updateIngredient, removeIngredient, 
                     addComment, updateComment, goBack}) => {    
  const pageTabs = [
    { "navID": "RecipeName", "navName": "Recipe Name" },
    { "navID": "Comments", "navName": "Comments"},
    { "navID": "SaveForm", "navName": "Save" }
  ];

  return (
    recipe &&
    <div className="row">
      <form className="col s9 m10">
        <h3>Manage Recipe</h3>
        <br />
        <div className="row">
          <p>{recipe.recipeName}</p>
        </div>
       
        <div>
        {recipe.comments &&
          <CommentList
            NavId="Comments"
            comments={recipe.comments}
            name="comments"
            label="Comments"
            addComment={addComment}
            updateComment={updateComment}/>}
        </div>
        <div className="row">
            <BackButton classes="waves-effect waves-light btn" goBack={goBack}/>
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

CommentForm.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  allCategories: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
  addIngredient: React.PropTypes.func.isRequired,
  updateIngredient: React.PropTypes.func.isRequired,
  removeIngredient: React.PropTypes.func.isRequired,
  addComment: React.PropTypes.func.isRequired,
  updateComment: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired
};

export default CommentForm;