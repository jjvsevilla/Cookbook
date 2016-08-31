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
  const recipeId = ownProps.params.id;
  let auxId = '';

  let recipe = {id: '', category_id: '', recipeName: '', chef: '', preparation: '', rating: '', imageUrl: '', publishdate: '', ingredients: []};

  if (recipeId && recipeId.length>0){
    auxId = recipeId;
  }

  const categoriesFormattedForDropdown = state.categories.map(category => {
    return {
      value: category.id,
      text: category.description,
      iconUrl: category.iconUrl
    };
  });

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
export default class ManageRecipePage extends React.Component {
  
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      recipe: Object.assign({}, props.recipe),
      recipeId: '',
      errors: {},
      saving: false,
      lastComment: {
        "comment":""
      }
    };
  }

  componentDidMount() {
    $('.toc-wrapper').pushpin({ top: 64 });
    $('.scrollspy').scrollSpy();
    $('textarea').trigger('autoresize');
    $("select[name='categoryId']").material_select(this.updateRecipeState.bind(this, undefined, 'category_id', "select[name='categoryId']"));

    let recipeId = this.props.recipeId;
    if (recipeId && recipeId.length>0){
      this.props.actions.getRecipe(recipeId)
        .then((result) => {
          this.setState({recipe: Object.assign({}, result)});
        })
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }
  }

  componentDidUpdate(){
    $('.toc-wrapper').pushpin({ top: 64 });
    $('.scrollspy').scrollSpy();
    $('textarea').trigger('autoresize');
    Materialize.updateTextFields();
    $("select[name='categoryId']").material_select(this.updateRecipeState.bind(this, undefined, 'category_id', "select[name='categoryId']"));
  }

  validateSave(recipe){
    if(recipe.recipeName.length===0){
      return "The Recipe Name field is required.";
    } else if (recipe.category_id.length===0){
      return "The category field is required.";
    } else if (recipe.chef.length===0){
      return "The Chef field is required.";
    } else if (recipe.ingredients.length===0){
      return "Ingredients are required. You must add at least one.";
    } else if (recipe.preparation.length===0){
      return "The Preparation field is required.";
    } else {
      return "";
    }
  }

  @autobind
  updateRecipeState(event, field, selector) {
    let _value = "";
    let _field = "";
    if(event){
        _value = event.target.value;
        _field = event.target.name;
    } else {
      _field = field;
      _value = $(selector).val();
    }
    let recipe = this.state.recipe;
    recipe[_field] = _value;
    return this.setState({recipe: recipe});
  }

  @autobind
  saveRecipe(event) {
    event.preventDefault();
    this.setState({saving: true});

    let recipe = this.state.recipe;  
    let valErrorMessage = this.validateSave(recipe);    
    if(valErrorMessage.length>0){
      toastr.error(valErrorMessage);
      this.setState({saving: false});
      return;
    }
    
    if(recipe.imageUrl === ""){
      recipe.imageUrl = "https://image.freepik.com/free-icon/covered-plate-of-food_318-61406.jpg";
    }
    if(recipe.publishdate === ""){
      recipe.publishdate = new Date().toISOString().split('T')[0];
    }
    if(recipe.rating === ""){
      recipe.rating = 1;
    }

    this.setState({recipe: recipe});

    this.props.actions.saveRecipe(this.state.recipe)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error.message);
        this.setState({saving: false});
      });
  }

  @autobind
  addIngredient(){
    let recipe = Object.assign({}, this.state.recipe);
    const newIngredient = {"name": "", "amount": ""};
    recipe.ingredients = [...recipe.ingredients, newIngredient];
    return this.setState({recipe: recipe});
  }

  @autobind
  updateIngredient(index, event){
    const field = event.target.name;
    let recipe = Object.assign({}, this.state.recipe);
    let ingredient = Object.assign({}, recipe.ingredients[index]);
    ingredient[field] = event.target.value;

    recipe.ingredients = recipe.ingredients.map((ingre, idx) => {
      if (idx === index) {
        return Object.assign({}, ingredient);
      }
      return ingre;
    });

    return this.setState({recipe: recipe});
  }

  @autobind
  removeIngredient(index){
    let recipe = Object.assign({}, this.state.recipe);
    recipe.ingredients = recipe.ingredients.filter((_, i) => i !== index);
    return this.setState({recipe: recipe});
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Recipe saved');
    this.context.router.push('/recipes');
  }

  @autobind
  goBack() {
    this.context.router.push('/recipes');
  }

  render(){
    const {recipe} = this.props;
    return (
      recipe &&
      <RecipeForm
        allCategories={this.props.categories}
        onChange={this.updateRecipeState}
        onSave={this.saveRecipe}
        recipe={this.state.recipe}
        errors={this.state.errors}
        saving={this.state.saving}
        addIngredient={this.addIngredient}
        updateIngredient={this.updateIngredient}
        removeIngredient={this.removeIngredient}
        goBack={this.goBack}
      />
    );
  }
}