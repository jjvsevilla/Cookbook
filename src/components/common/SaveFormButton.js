import React, {PropTypes} from 'react';

const SaveFormButton = ({onSave, saving, classes}) => (
  <input
    type="submit"
    disabled={saving}
    value={saving ? 'Saving...' : 'Save'}
    className={classes}
    onClick={onSave}/>   
);

SaveFormButton.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  classes: PropTypes.string.isRequired
};

export default SaveFormButton;