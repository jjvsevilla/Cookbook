import React, {PropTypes} from 'react';

const IngredientItem = ({ingredient, action, addIngredient, updateIngredient, removeIngredient}) => {
  let color="";
  let style="btn-floating btn-large waves-effect waves-light ";
  let isNew=true;

  if(action === "delete"){
    color="red";
    isNew=false;
  }
  style+=color;

  return (
    <li className="collection-item">
      <div className="row">
        <div className="input-field col s3">
          {!isNew && <input type="text" name="amount" value={ingredient.amount} onChange={updateIngredient} />}
        </div>
        <div className="input-field col s8">
          {!isNew && <input type="text" name="name" value={ingredient.name} onChange={updateIngredient} /> }
        </div>
        <div className="input-field col s1">
          {isNew && <a className={style} onClick={addIngredient}><i className="material-icons">{action}</i></a>}
          {!isNew && <a className={style} onClick={removeIngredient}><i className="material-icons">{action}</i></a>}
        </div>
      </div>
    </li>
  );
};

IngredientItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
  addIngredient: React.PropTypes.func.isRequired,
  updateIngredient: React.PropTypes.func.isRequired,
  removeIngredient: React.PropTypes.func.isRequired,
};

export default IngredientItem;
