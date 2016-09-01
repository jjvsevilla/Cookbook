import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';
import CommentForm from './CommentForm';
import toastr from 'toastr';
import autobind from 'autobind-decorator';
import request from 'superagent';
import apiConfig from '../../actions/apiConfig';
import materializecss from 'materialize-css';

const mapStateToProps = (state, ownProps) => {
  const recipeId = ownProps.params.id;
  let auxId = '';  
  let recipe = {id: '', recipeName: '', rating: '', imageUrl: '', publishdate: '', comments: []};

  if (recipeId && recipeId.length>0){
    auxId = recipeId;
  }

  return {
    recipeId: auxId,
    recipe: recipe
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class CommentRecipePage extends React.Component {
  
  static propTypes = {
    recipe: PropTypes.object.isRequired,
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

    let recipeId = this.props.recipeId;
    if (recipeId && recipeId.length>0){
      this.props.actions.getRecipe(recipeId)
        .then(result => {
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
  }

  validateSave(comment){  
    if(comment.comment.length===0){
      return "Comment cannot be empty!.";
    } else {
      return "";
    }
  }

  @autobind
  addComment(){
    event.preventDefault();
    this.setState({saving: true});
    let comment = Object.assign({}, this.state.lastComment, { recipe_id: this.state.recipe.id });
    let valErrorMessage = this.validateSave(comment);    
    if(valErrorMessage.length>0){
      toastr.error(valErrorMessage);
      this.setState({saving: false});
      return;
    }
    this.props.actions.saveRecipeComment(comment)
      .then(result => {
        let recipe = Object.assign({}, this.state.recipe);
        recipe.comments = [...recipe.comments, Object.assign({}, { "id": result.id }, { "comment": result.comment })];
        this.setState({recipe: recipe});
        this.setState({lastComment: Object.assign({}, {})});
        this.setState({saving: false});
        toastr.success('Comment saved');
      })
      .catch(error => {
        toastr.error(error.message);
        this.setState({saving: false});
      });
  }

  @autobind
  updateComment(index, event){
    const field = event.target.name;
    let comment = Object.assign({}, this.state.lastComment);
    comment[field] = event.target.value;
    return this.setState({lastComment: comment});
  }

  @autobind
  updateRating(index){
    debugger;
    console.log("updateRating");

    console.log(index);
  }

  @autobind
  goBack() {
    this.context.router.push('/recipes');
  }

  render(){
    const {recipe} = this.props;
    return (
      recipe &&
      <CommentForm
        updateRating={this.updateRating}
        onChange={this.updateComment}
        onSave={this.addComment}
        recipe={this.state.recipe}
        errors={this.state.errors}
        saving={this.state.saving}        
        goBack={this.goBack}
      />
    );
  }
}