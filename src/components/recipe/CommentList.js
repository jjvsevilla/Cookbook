import React, {PropTypes} from 'react';
import CommentItem from './CommentItem';


const CommentList = ({NavId, comments, name, label}) => {

  return (
    <div className="row scrollspy"  id={NavId}>
      <div className="col s12">
        <label htmlFor={name} className="inputLabelFix active">{label}</label>
        <ul className="collection" name={name}>
          {comments && comments.map((com, index) =>
          <CommentItem key={index} comment={com.comment} index={index}/>
          )}
        </ul>
      </div>
    </div>
  );
};

CommentList.propTypes = {
  NavId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CommentList;
