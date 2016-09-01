import React, {PropTypes} from 'react';
import CommentItem from './CommentItem';

const CommentList = ({NavId, comments, name, label, addComment, updateComment, updateRating, saving}) => {
  let addNewComment, newComment;
  let newIndex=0;

  newIndex=comments.length;
  newComment = {};
  addNewComment = (
    <CommentItem 
      key={newIndex} 
      comment={newComment} 
      auxIndex={newIndex} 
      action="add"
      addComment={addComment} 
      updateComment={updateComment.bind(this, newIndex)} 
      updateRating={updateRating} 
      saving={saving}/>
  );

  return (
    <div className="row scrollspy" id={NavId}>
      <div className="col s12">
        <label htmlFor={name} className="inputLabelFix active">{label}</label>
        <ul className="collection" name={name}>
          {addNewComment}   
          {comments && comments.map((com, index) =>
          <CommentItem 
            key={index} 
            comment={com} 
            auxIndex={index} 
            action="view" 
            addComment={addComment} 
            updateComment={updateComment.bind(this, index)} 
            saving={saving}/>
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
  label: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  updateRating: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CommentList;