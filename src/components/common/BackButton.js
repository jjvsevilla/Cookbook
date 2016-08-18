import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router'

const BackButton = ({classes}) => (
  <a className={classes} onClick={browserHistory.goBack}>Back</a>
)

BackButton.propTypes = {
  classes: PropTypes.string.isRequired
};

export default BackButton;