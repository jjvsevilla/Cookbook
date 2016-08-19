import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';
import toastr from 'toastr';

export class ManageRecipePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      recipe: Object.assign({}, props.recipe),
      errors: {},
      saving: false
    };

    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);

    this.updateIngredient = this.updateIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.recipe.id != nextProps.recipe.id) {    
      this.setState({recipe: Object.assign({}, nextProps.recipe)});
    }
  }

  updateRecipeState(event) {
    const field = event.target.name;
    let recipe = this.state.recipe;
    recipe[field] = event.target.value;
    return this.setState({recipe: recipe});
  }

  saveRecipe(event) {
    event.preventDefault();
    this.setState({saving: true});

    if(this.state.recipe.imageUrl === ""){
      this.state.recipe.imageUrl = "https://image.freepik.com/free-icon/covered-plate-of-food_318-61406.jpg";
    }

    this.props.actions.saveRecipe(this.state.recipe)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  addIngredient(){
    let recipe = Object.assign({}, this.state.recipe); 
    const newIngredient = Object.assign({}, {"name": "", "amount": ""});
    recipe.ingredients = [...recipe.ingredients,Object.assign({}, newIngredient)];
    return this.setState({recipe: recipe}); 
  }

  updateIngredient(index, event){ 
    const field = event.target.name;
    let recipe = Object.assign({}, this.state.recipe);     
    let ingredient = Object.assign({}, recipe.ingredients[index]); 
    ingredient[field] = event.target.value; 

    recipe.ingredients = recipe.ingredients.map((ingre, idx) => {
      if (idx === index) {
        return Object.assign({}, ingredient)
      }
      return ingre
    });

    return this.setState({recipe: recipe});
  }

  removeIngredient(index){
    let recipe = Object.assign({}, this.state.recipe); 
    recipe.ingredients = [...recipe.ingredients.filter((_, i) => i !== index)];
    return this.setState({recipe: recipe});
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Recipe saved');
    this.context.router.push('/recipes');
  }

  render(){
    return (
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
      />
    );
  }
}

ManageRecipePage.propTypes = {
  recipe: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageRecipePage.contextTypes = {
  router: PropTypes.object
};

function getRecipeById(recipes, id) {
  const recipe = recipes.filter(recipe => recipe.id == id);
  if (recipe) return recipe[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const recipeId = ownProps.params.id; // from the path `/recipe/:id`

  let recipe = {id: '', recipeName: '', categoryId: '', chef: '', ingredients: [], preparation: '', rating: '', imageUrl: '', publishdate: ''};

  if (recipeId && state.recipes.length > 0) {
    recipe = getRecipeById(state.recipes, recipeId);
  }

  const categoriesFormattedForDropdown = state.categories.map(category => {
    return {
      value: category.id,
      text: category.description
    };
  });

  return {
    recipe: recipe,
    categories: categoriesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage);