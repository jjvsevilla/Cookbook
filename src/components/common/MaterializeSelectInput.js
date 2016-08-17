import React, {PropTypes} from 'react';
//import materializecss from 'materialize-css';

const MaterializeSelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="input-field col s12">
      <select
        name={name}
        value={value}
        onChange={onChange}>
        <option value="" disabled>{defaultOption}</option>
        {options.map((option) => {
          return <option key={option.value} value={option.value}>{option.text}</option>;
        })
        }
      </select>
      <label>Materialize Select</label>
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