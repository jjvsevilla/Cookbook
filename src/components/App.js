// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import {connect} from 'react-redux';

/*
import materializecss from 'materialize-css';
console.log(typeof $ === 'function');
console.log(typeof materializecss === 'function');
*/

class App extends React.Component {
  /*
  componentDidMount() {
    $(document).ready(function() {
      console.log('App componentDidMount');
      $("select").material_select();
    });
  }
  */
  
  render() {
    return (
      <div>
        <Header loading={this.props.loading} />
        <main>
          <div className="container">
            {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);