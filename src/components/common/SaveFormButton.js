import React, {PropTypes} from 'react';

const SaveFormButton = ({NavId, onSave, saving, classes}) => (
  <input
    id={NavId}
    type="submit"
    disabled={saving}
    value={saving ? 'Saving...' : 'Save'}
    className={classes}
    onClick={onSave}/>
);

SaveFormButton.propTypes = {
  NavId: PropTypes.string.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  classes: PropTypes.string.isRequired
};

export default SaveFormButton;