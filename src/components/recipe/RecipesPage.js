import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeList from './RecipeList';
import {browserHistory} from 'react-router';
import LoadingDots from '../common/LoadingDots';
import NumberOfElementsButton from '../common/NumberOfElementsButton';

class RecipesPage extends React.Component {
 constructor(props, context) {
    super(props, context);
  }

  recipeRow(recipe, index){
    return <div key={index}>{recipe.recipeName}</div>;
  }

  redirectToAddRecipePage() {
    browserHistory.push('/recipe');
  }

  render() {
    const {recipes, loading} = this.props;
    return (
      <div className="row"> 
        <div className="col s12">

          <div className="row valign-wrapper">        
            <div className="col s6 left-align">
              <h3 className="header">
                Recipes        
              </h3> 
            </div>          
            <NumberOfElementsButton loading={this.props.loading} elements={recipes} single={`recipe`} multiple={`recipes`}/>
          </div>  
          
          <div className="divider"></div>

          <div className="row">            
            <RecipeList recipes={recipes}/>
          </div>

          <div className="row">
            <div className="fixed-action-btn">
              <a className="btn-floating btn-large red"
                  onClick={this.redirectToAddRecipePage}>
                  <i className="material-icons">add</i>
              </a>
            </div>
          </div>  

        </div>
      </div>
    );
  }
}

RecipesPage.propTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps){  
  return {
    recipes: state.recipes,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);