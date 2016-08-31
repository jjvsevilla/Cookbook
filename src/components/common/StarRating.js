import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';
import toastr from 'toastr';
import autobind from 'autobind-decorator';
import request from 'superagent';
import apiConfig from '../../actions/apiConfig';
import materializecss from 'materialize-css';

const mapStateToProps = (state, ownProps) => {

  return {
    recipeId: auxId,
    recipe: recipe,
    categories: categoriesFormattedForDropdown
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class StarRating extends React.Component {
  
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    
    
  }

  componentDidMount() {
      
  }

  componentDidUpdate(){
        
  }

  render(){
    return (
      
      
    );
  }
}