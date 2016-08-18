import React, {PropTypes} from 'react';

const IngredientItem = ({ingredient, action}) => {
  console.log('IngredientItem before render')
  let style="btn-floating btn-large waves-effect waves-light red";
  return (
    <li className="collection-item">
      <div className="row"> 
        <div className="input-field col s3">
          <input type="text" value={ingredient.amount} />
        </div>   
        <div className="input-field col s6">
          <input type="text" value={ingredient.name} />
        </div>  
        <div className="input-field col s3">
          {}
          <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">{action}</i></a>
        </div>
      </div>       
    </li>
  );
};

IngredientItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired
};

export default IngredientItem;
