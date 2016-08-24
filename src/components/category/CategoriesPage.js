import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';

class CategoriesPage extends React.Component {
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

CategoriesPage.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);