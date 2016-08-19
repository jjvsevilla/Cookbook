import React, {PropTypes} from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = ({ingredients, name, label, addIngredient, updateIngredient, removeIngredient}) => {
  
  let addNewIngredient, newIngredient;
  let newIndex=0;
  if(ingredients.length<10){
    newIndex=ingredients.length;
    newIngredient = {};
    addNewIngredient = <IngredientItem key={newIndex} 
                                       ingredient={newIngredient} 
                                       action="add" 
                                       addIngredient={addIngredient}
                                       updateIngredient={updateIngredient.bind(this, newIndex)}/>
  }

  return (
    <div className="row">
      <div className="col s12">
        <label htmlFor={name} className="active">{label}</label>
        <ul className="collection" name={name}>    
          {ingredients.map((ingredient, index) =>            
            <IngredientItem key={index} 
                            ingredient={ingredient} 
                            action="delete"
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
  ingredients: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default IngredientList;
