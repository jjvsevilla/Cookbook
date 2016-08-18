import React, {PropTypes} from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = ({ingredients, name, label}) => {
  
  let addIngredient, newIngredient;
  if(ingredients.length<10){
    newIngredient = {"name": "", "amount": ""};
    addIngredient = <IngredientItem key={ingredients.length+1} ingredient={newIngredient} action="add"/>
  }

  return (
    <div className="row">
      <div className="col s12">
        <label htmlFor={name} className="active">{label}</label>
        <ul className="collection" name={name}>    
          {ingredients.map((ingredient, index) =>
            <IngredientItem key={index} ingredient={ingredient} action="delete"/>
          )}   
          {addIngredient}
        </ul>
      </div> 
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default IngredientList;
