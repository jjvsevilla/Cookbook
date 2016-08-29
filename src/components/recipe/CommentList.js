import React, {PropTypes} from 'react';
import CommentItem from './CommentItem';

const CommentList = ({NavId, comments, name, label, addComment, updateComment}) => {
  let addNewComment, newComment;
  let newIndex=0;
  
  if(comments && comments.length<10){
    newIndex=comments.length;
    newComment = {}; //{"comment":""};
    addNewComment = (
      <CommentItem 
        key={newIndex} 
        comment={newComment} 
        auxIndex={newIndex} 
        action="add"
        addComment={addComment} 
        updateComment={updateComment.bind(this, newIndex)}/>
    );
  }

  return (
    <div className="row scrollspy"  id={NavId}>
      <div className="col s12">
        <label htmlFor={name} className="inputLabelFix active">{label}</label>
        <ul className="collection" name={name}>
          {comments && comments.map((com, index) =>
          <CommentItem 
            key={index} 
            comment={com} 
            auxIndex={index} 
            action="delete" 
            addComment={addComment} 
            updateComment={updateComment.bind(this, index)} />
          )}
          {addNewComment}          
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