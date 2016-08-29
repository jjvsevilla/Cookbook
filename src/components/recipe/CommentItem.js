import React, {PropTypes} from 'react';

const CommentItem = ({comment, auxIndex, action, addComment, updateComment}) => {  
  let color="";
  let style="btn-floating btn-large waves-effect waves-light ";
  let isNew=true;
  let icon="thumb_down";

  if(action === "delete"){
    color="red";
    isNew=false;
  }  
  style+=color;
  if(auxIndex % 2 === 0){
    icon="thumb_up";
  }
  
  return (
    <li className="collection-item">
      <div className="row">
        <div className="valign-wrapper">
          <div className="col s1 valign right-align">            
            <i className="material-icons">comments</i>
          </div>
          <div className="col s10 valign input-field">
            {isNew && <input type="text" name="comment" value={comment.comment} onChange={updateComment} />}
            {!isNew && <p>{comment.comment}</p>}
          </div>
          <div className="col s1 valign center-align">
            {isNew && <a className={style} onClick={addComment}><i className="material-icons">{action}</i></a>}
            {!isNew && <i className="material-icons">{icon}</i>}
          </div>
        </div>
      </div>
    </li>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  index: PropTypes.number,
  action: PropTypes.string.isRequired,
  addComment: React.PropTypes.func.isRequired,
  updateComment: React.PropTypes.func.isRequired
};

export default CommentItem;