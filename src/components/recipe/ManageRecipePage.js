import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import RecipeForm from './RecipeForm';
import toastr from 'toastr';
//import materializecss from 'materialize-css';

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
  }

/*
  componentDidMount() {
    debugger;
      console.log('exampleComponent mounted');
       $(document).ready(function() {
    $('select').material_select();
  });
    }
*/

  updateRecipeState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveRecipe(event) {
    event.preventDefault();
    this.setState({saving: true});

    this.props.actions.saveRecipe(this.state.recipe)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Recipe saved');
    this.context.router.push('/recipes');
  }  

  render(){
    //materializecss.material_select();
    return (
      <RecipeForm
        allCategories={this.props.categories}
        onChange={this.updateRecipeState}
        onSave={this.saveRecipe}
        recipe={this.state.recipe}
        errors={this.state.errors}
        saving={this.state.saving} 
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

function mapStateToProps(state, ownProps) {
 
  let recipe = {id: '', recipeName: '', categoryId: '', chef: '', ingredients: [], preparation: '', rating: '', imageUrl: '', publishdate: ''};

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
