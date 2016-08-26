import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';

const BackButton = ({classes, goBack}) => (
  <a className={classes} onClick={goBack}>Back</a>
);

BackButton.propTypes = {
  classes: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired
};

export default BackButton;