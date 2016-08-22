import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';
import toastr from 'toastr';
import autobind from 'autobind-decorator';

export class ManageRecipePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      recipe: Object.assign({}, props.recipe),
      errors: {},
      saving: false
    };

    // this.updateRecipeState = this.updateRecipeState.bind(this);
    // this.saveRecipe = this.saveRecipe.bind(this);

    // this.addIngredient = this.addIngredient.bind(this);
    // this.updateIngredient = this.updateIngredient.bind(this);
    // this.removeIngredient = this.removeIngredient.bind(this);
  }

  componentDidMount() {
      $('.toc-wrapper').pushpin({ top: 64 });
      $('.scrollspy').scrollSpy();
      $("select[name='categoryId']").material_select(this.updateRecipeState.bind(this, undefined, 'categoryId', "select[name='categoryId']"));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.recipe.id != nextProps.recipe.id) {
      this.setState({recipe: Object.assign({}, nextProps.recipe)});
    }
  }

  componentDidUpdate(){
      $('.toc-wrapper').pushpin({ top: 64 });
      $('.scrollspy').scrollSpy();
      $("select[name='categoryId']").material_select(this.updateRecipeState.bind(this, undefined, 'categoryId', "select[name='categoryId']"));
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
    if(recipe.imageUrl === ""){
      recipe.imageUrl = "https://image.freepik.com/free-icon/covered-plate-of-food_318-61406.jpg";
    }
    this.setState({recipe: recipe});

    this.props.actions.saveRecipe(this.state.recipe)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
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
