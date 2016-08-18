import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const NumberOfElementsButton = ({loading, elements, single, multiple}) => {
  return (
    <div className="col s6 right-align">  
      {!loading && <a className="btn valign">{elements.length} {elements.length===1 ? single : multiple}</a>}
    </div>
  );
};

NumberOfElementsButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  elements: PropTypes.array.isRequired,
  single: PropTypes.string.isRequired,
  multiple: PropTypes.string.isRequired,
};

export default NumberOfElementsButton;