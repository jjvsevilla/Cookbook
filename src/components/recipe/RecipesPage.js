import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import * as categoryActions from '../../actions/categoryActions';
import RecipeList from './RecipeList';
import {browserHistory} from 'react-router';
import LoadingDots from '../common/LoadingDots';
import NumberOfElementsButton from '../common/NumberOfElementsButton';
import autobind from 'autobind-decorator';

class RecipesPage extends React.Component {
 constructor(props, context) {
    super(props, context);

    this.state = {
      filter: {
        recipeName: "",
        categoryId: ""
      }
    };
  }

  componentDidMount() {
      $("select[name='categoryId']").material_select(this.updateFilterState.bind(this, undefined, 'categoryId', "select[name='categoryId']"));
  }

  componentDidUpdate(){
      $("select[name='categoryId']").material_select(this.updateFilterState.bind(this, undefined, 'categoryId', "select[name='categoryId']"));
  }

  redirectToAddRecipePage() {
    browserHistory.push('/recipe');
  }

  @autobind
  updateFilterState(event, field, selector) {
    let _value = "";
    let _field = "";
    if(event){
        _value = event.target.value;
        _field = event.target.name;
    } else {
      _field = field;
      _value = $(selector).val();
    }
    let filter = this.state.filter;
    filter[_field] = _value;
    return this.setState({filter: filter});
  }  

  render() {
    const {recipes, categories, loading} = this.props;
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
            <RecipeList recipes={recipes} 
                        categories={categories} 
                        recipeNameFilter={this.state.filter.recipeName}
                        categoryFilter={this.state.filter.categoryId}
                        onChange={this.updateFilterState}
                        updateRecipeNameFilter={this.updateRecipeNameFilter}/>
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
  let categories = state.categories;

  const recipesWithCategory = state.recipes.map(recipe => {
    let category = categories.find(category => category.id == recipe.categoryId);
    if(category){
      return Object.assign({}, recipe, {'categoryName': category.description, 'categoryIcon': category.iconUrl });
    }
    return recipe;
  });

  const categoriesFormattedForDropdown = categories.map(category => {
    return {
      value: category.id,
      text: category.description,
      iconUrl: category.iconUrl
    };
  });

  return {
    recipes: recipesWithCategory, //state.recipes,
    categories: categoriesFormattedForDropdown,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);