import React, {PropTypes} from 'react';

const MaterializeSelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="input-field col s12">
      <select
        className="browser-default"
        name={name}
        value={value}
        onChange={onChange}>
        <option value="" disabled>{defaultOption}</option>
        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.text}</option>;
        })
        }
      </select>
      <label htmlFor={name} className="active">{label}</label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

MaterializeSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default MaterializeSelectInput;