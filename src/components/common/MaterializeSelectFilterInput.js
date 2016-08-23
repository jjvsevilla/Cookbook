import React, {PropTypes} from 'react';

const MaterializeSelectFilterInput = ({NavId, name, onChange, defaultOption, value, options}) => {
  return (
    <div className="input-field col s12 scrollspy" id={NavId}>
      <select
        className="icons"
        name={name}
        value={value}
        onChange={onChange}>
        <option value=""
          data-icon="http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/32/Restaurant-icon.png"
          className="left circle">{defaultOption}</option>
        {options.map((option, index) => {
          return <option key={index} value={option.value} data-icon={option.iconUrl} className="left circle">{option.text}</option>;
        })
        }
      </select>
    </div>
  );
};

MaterializeSelectFilterInput.propTypes = {
  NavId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default MaterializeSelectFilterInput;