import React, {PropTypes} from 'react';

const MaterializeTextFilterInputWithIcon = ({NavId, name, onChange, placeholder, value, iconName}) => {
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
        placeholder={placeholder}/>
    </div>
  );
};

MaterializeTextFilterInputWithIcon.propTypes = {
  NavId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconName: PropTypes.string.isRequired
};

export default MaterializeTextFilterInputWithIcon;
