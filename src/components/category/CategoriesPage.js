import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';

class CategoriesPage extends React.Component {
 constructor(props, context) {
    super(props, context);
  }

  categoryRow(category, index){
    return <div key={index}>{category.description}</div>;
  }

  render() {
    const {categories} = this.props;
    return (
      <div>
        <h1>Categories</h1>      
        {this.props.categories.map(this.categoryRow)}     
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