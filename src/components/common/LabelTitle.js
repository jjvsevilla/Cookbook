import React, {PropTypes} from 'react';

const LabelTitle = ({NavId, text}) => (
 <div className="row scrollspy" id={NavId}>
    <div className="col s12">      
      <h4>{text}</h4>
    </div>
  </div>  
);

LabelTitle.propTypes = {
  NavId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired 
};

export default LabelTitle;