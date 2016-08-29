import React, {PropTypes} from 'react';

const CommentItem = ({comment, index}) => {
  let color="";
  let icon="thumb_down";

  if(index % 2 === 0){
    icon="thumb_up"
  }

  return (
    <li className="collection-item avatar" key={index}>
      <div className="row">
        <div className="col s12">
          <i className="material-icons circle large red">assignment_ind</i>
          <p>{comment}</p>
        </div>
      </div>
      <div className="row comments-row">
        <div className="col s1 offset-s11 center-align">
          <i className="material-icons ">{icon}</i>
        </div>
      </div>
    </li>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.string.isRequired,
  index: PropTypes.number
};

export default CommentItem;
