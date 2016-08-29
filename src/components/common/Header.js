import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="top-nav">
      <div className="container">
        <div className="nav-wrapper">
          <IndexLink to="/" className="brand-logo left"><i className="material-icons">assignment</i>Cookbook {loading && <LoadingDots interval={100} dots={20}/>}</IndexLink>
          <ul id="nav-mobile" className="right hidee-on-med-and-down">
            <li><Link to="/recipes" activeClassName="active">Recipes</Link></li>
            <li><Link to="/categories" activeClassName="active">Categories</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;