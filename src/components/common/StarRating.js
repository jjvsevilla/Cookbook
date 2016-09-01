import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import autobind from 'autobind-decorator';
import materializecss from 'materialize-css';

/*
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
*/

export default class StarRating extends React.Component {  
  static propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    stars: PropTypes.number,
    starColor: PropTypes.string,
    editing: PropTypes.bool,
    //onChange: PropTypes.func,
    updateRating: PropTypes.func
  };
  static defaultProps = {
    stars: 5,
    rating: 0,
    editing: true,
    starColor: '#ffb400'
  };

  constructor(props, context) {
    super(props, context);      

      this.state = {
        rating: props.rating
      };
  }

  componentDidMount(){
      
  }

  componentDidUpdate(){
        
  }

  @autobind
  onChange(event){
    debugger;
  }

  @autobind
  onMouseLeave(index){
    console.log("onMouseLeave " + index);
  }

  @autobind
  onMouseOver(index){
    console.log("onMouseOver " + index);
  }

  renderStars(){
    const { name, stars, starColor, editing, updateRating } = this.props;
    const { rating } = this.state;

    //console.log(name);

    let nodes = [];
    //for (let i = stars; i > 0; i--) {
    for (let i = 1; i <= stars; i++) {
      const id = `${name}_${i}`;  
      const starStyle = {
        color: i <= rating ? "#FFB400" : "#999999"
      }
      //console.log(starStyle)
      const starNode;

      if(typeof updateRating === "function"){
        starNode = (  
        <label style={starStyle}>
          <i className="small material-icons"
            data-value={i} 
            onClick={updateRating} 
            onMouseLeave={this.onMouseLeave.bind(this, i)}
            onMouseOver={this.onMouseOver.bind(this, i)}>star</i>
          </label>
        )
      } else {
        
      }
      
      starNode = (  
        <label style={starStyle}>
          <i className="small material-icons"
            data-value={i} 
            onClick={updateRating} 
            onMouseLeave={this.onMouseLeave.bind(this, i)}
            onMouseOver={this.onMouseOver.bind(this, i)}>star</i>
          </label>
      )
      nodes.push(starNode);
    }

    return nodes;
  }

  render(){
    const style={
      display: 'inline-block', 
      position: 'relative'
    };
    return (
      <div style={style}>
        {this.renderStars()}
      </div>  
    );
  }
}