import React, {PropTypes} from 'react';

const MaterializeTextInputWithIcon = ({name, label, onChange, placeholder, value, error, iconName}) => {
  /*
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
*/
  return (
    <div className="input-field col s12">
      <i className="material-icons prefix">{iconName}</i>
      <input 
        type="text" 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="validate"/>
      <label htmlFor={name} className="active">{label}</label>
      {error && <div className="left-alert">{error}</div>}
    </div>
  );
};

MaterializeTextInputWithIcon.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  iconName: PropTypes.string.isRequired,
};

export default MaterializeTextInputWithIcon;
