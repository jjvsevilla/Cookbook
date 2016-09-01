import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

import MaterializeTextInputWithIcon from '../common/MaterializeTextInputWithIcon';
import MaterializeTextInput from '../common/MaterializeTextInput';
import MaterializeTextAreaInput from '../common/MaterializeTextAreaInput';
import MaterializeSelectInput from '../common/MaterializeSelectInput';
import BackButton from '../common/BackButton';
import NavigatorPageLinks from '../common/NavigatorPageLinks';
import CommentList from './CommentList';
import LabelTitle from '../common/LabelTitle';

const CommentForm = ({recipe, onSave, updateRating, onChange, saving, errors, goBack}) => {    
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
        <LabelTitle NavId="RecipeName" text={recipe.recipeName} />        
        <div>
        {recipe.comments &&
          <CommentList
            NavId="Comments"
            comments={recipe.comments}
            name="comments"
            label="Comments"
            addComment={onSave}
            updateComment={onChange}
            updateRating={updateRating} 
            saving={saving}/>}
        </div>
        <div className="row">
            <BackButton classes="waves-effect waves-light btn" goBack={goBack}/>
        </div>
      </form>
      <div className="col s3 m2">
        <NavigatorPageLinks pageTabs={pageTabs} />
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  recipe: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  updateRating: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object, 
  goBack: PropTypes.func.isRequired
};

export default CommentForm;