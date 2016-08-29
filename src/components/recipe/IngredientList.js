import React, {PropTypes} from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = ({NavId, ingredients, name, label, addIngredient, updateIngredient, removeIngredient}) => {
  let addNewIngredient, newIngredient;
  let newIndex=0;
  
  if(ingredients && ingredients.length<10){
    newIndex=ingredients.length;
    newIngredient = {};
    addNewIngredient = (
      <IngredientItem 
        key={newIndex} 
        ingredient={newIngredient} 
        action="add"
        addIngredient={addIngredient} 
        updateIngredient={updateIngredient.bind(this, newIndex)} 
        removeIngredient={removeIngredient}/>
    );
  }

  return (
    <div className="row scrollspy"  id={NavId}>
      <div className="col s12">
        <label htmlFor={name} className="inputLabelFix active">{label}</label>
        <ul className="collection" name={name}>
          <li className="collection-item">
            <div className="valign-wrapper">
                <b className="col s3 valign">Amount</b>
                <b className="col s7 valign">Description</b>
                <b className="col s2 valign"></b>
            </div>
          </li>
          {ingredients && ingredients.map((ingredient, index) =>
            <IngredientItem 
              key={index} 
              ingredient={ingredient} 
              action="delete"
              addIngredient={addIngredient} 
              updateIngredient={updateIngredient.bind(this, index)} 
              removeIngredient={removeIngredient.bind(this, index)}/>
          )}
          {addNewIngredient}
        </ul>
      </div>
    </div>
  );
};

IngredientList.propTypes = {
  NavId: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default IngredientList;