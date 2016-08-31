import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class CategoriesPage extends React.Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  categoryRow(category, index){
    return (
      <li key={index} className="collection-item avatar">
        <img src={category.iconUrl} alt={category.description} className="circle" />
        <span className="title">{category.description}</span>
        <p>First Line</p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    );
  }

  render() {
    const {categories} = this.props;
    return (
      <div className="row">
        <div className="col s12">
          <h3 className="header">
            Categories
          </h3>  
          <ul className="collection">     
            {categories && categories.map(this.categoryRow)}     
          </ul>
        </div>    
      </div>
    );
  }
}
