import React, {PropTypes} from 'react';

const SaveLinkButton = ({NavId, onSave, saving, classes, actionIcon}) => (
  <a id={NavId}
    disabled={saving}
    className={classes}
    onClick={onSave}>
    <i className="material-icons">{actionIcon}</i>
  </a>       
);

SaveLinkButton.propTypes = {
  NavId: PropTypes.string.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  classes: PropTypes.string.isRequired,
  actionIcon: PropTypes.string.isRequired 
};

export default SaveLinkButton;