import React, {PropTypes} from 'react';

const MaterializeTextAreaInput = ({NavId, name, label, onChange, placeholder, value, error}) => {
  /*
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
*/
  return (
    <div className="input-field col s12 scrollspy" id={NavId}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="materialize-textarea"></textarea>
      <label htmlFor={name} className="inputLabelFix active">{label}</label>
      {error && <div className="left-alert ">{error}</div>}
    </div>
  );
};

MaterializeTextAreaInput.propTypes = {
  NavId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default MaterializeTextAreaInput;



