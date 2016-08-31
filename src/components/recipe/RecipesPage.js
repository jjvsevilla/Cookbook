import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import * as categoryActions from '../../actions/categoryActions';
import RecipeList from './RecipeList';
import {browserHistory} from 'react-router';
import LoadingDots from '../common/LoadingDots';
import NumberOfElementsButton from '../common/NumberOfElementsButton';
import ConfirmModal from '../common/ConfirmModal';
import toastr from 'toastr';
import autobind from 'autobind-decorator';

const mapStateToProps = (state, ownProps) => {  
  let categories = state.categories;

  const recipesWithCategory = state.recipes.map(recipe => {
    let category = categories.find(category => category.id == recipe.category_id);
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
    recipes: recipesWithCategory,
    categories: categoriesFormattedForDropdown,
    loading: state.ajaxCallsInProgress > 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class RecipesPage extends React.Component {
  
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  };

 constructor(props, context) {
    super(props, context);

    this.state = {
      filter: {
        recipeName: "",
        categoryId: ""
      },
      recipeId: "",
      modal: {    
        controlId: "modalDeleteRecipe",                              
        header: "Delete Recipe Confirmation",
        content: "Are you sure you want to delete this recipe?",
        confirmText: "Accept",
        cancelText: "Cancel",
        objectName: "",
        objectImageUrl: ""
      }
    };
  }

  componentDidMount() {
    $("select[name='categoryId']").material_select(this.updateFilterState.bind(this, undefined, 'categoryId', "select[name='categoryId']"));
    $('.modal-trigger').leanModal();
  }

  componentDidUpdate(){
    $("select[name='categoryId']").material_select(this.updateFilterState.bind(this, undefined, 'categoryId', "select[name='categoryId']"));
    $('.modal-trigger').leanModal();
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

  @autobind
  setDeleteRecipeId(id, objectName, objectImageUrl){
    this.setState({recipeId: id});
    let modal = Object.assign({}, this.state.modal, { objectName: objectName}, { objectImageUrl: objectImageUrl});  
    this.setState({modal: modal });
  }

  @autobind
  deleteRecipe(){
    let id = this.state.recipeId;
    this.props.actions.deleteRecipe(id)
      .then((res) => {
        $('#' + this.state.modal.controlId).closeModal();
        this.setState({saving: false});
        toastr.success('Recipe deleted');
      })
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });      
  }

  render() {
    const {recipes, categories, loading} = this.props;
    const modal = this.state.modal;

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
                        setDeleteRecipeId={this.setDeleteRecipeId}
                        confirmModalId={modal.controlId}/>

            <ConfirmModal controlId={modal.controlId}
                          header={modal.header}
                          content={modal.content}
                          confirmAction={this.deleteRecipe} 
                          confirmText={modal.confirmText}
                          cancelText={modal.cancelText}
                          objectName={modal.objectName}
                          objectImageUrl={modal.objectImageUrl}/>                            
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