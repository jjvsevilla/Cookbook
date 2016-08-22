import React, {PropTypes} from 'react';

const MaterializeTextInputWithIcon = ({NavId, name, label, onChange, placeholder, value, error, iconName}) => {
  /*
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
*/
  return (
    <div className="input-field col s12 scrollspy" id={NavId}>
      <i className="material-icons prefix">{iconName}</i>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="validate"/>
      <label htmlFor={name} className="inputLabelFix active">{label}</label>
      {error && <div className="left-alert">{error}</div>}
    </div>
  );
};

MaterializeTextInputWithIcon.propTypes = {
  NavId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  iconName: PropTypes.string.isRequired
};

export default MaterializeTextInputWithIcon;
