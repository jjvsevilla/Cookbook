import React, {PropTypes} from 'react';
import SaveLinkButton from '../common/SaveLinkButton';
import StarRating from '../common/StarRating';

const CommentItem = ({comment, auxIndex, action, addComment, updateComment, saving, updateRating}) => {  
  let color="";
  let style="btn-floating btn-large waves-effect waves-light ";
  let isNew=true;
  let icon="thumb_down";

  if(action === "view"){
    color="red";
    isNew=false;
  }  
  style+=color;
    
  let starRatingName = `${auxIndex}_rating`;
  let rating = 3;
  //console.log(starRatingName);

  return (
    <li className="collection-item">
      <div className="row">
        <h4>rating!</h4>
        <StarRating 
          name={starRatingName}
          rating={rating} 
          updateRating={updateRating} />
      </div>
      <div className="row">
        <div className="valign-wrapper">
          <div className="col s1 valign right-align">            
            <i className="material-icons">comments</i>
          </div>
          <div className="col s8 m9 valign input-field">
            {isNew && <input type="text" name="comment" value={comment.comment} onChange={updateComment} />}
            {!isNew && <p>{comment.comment}</p>}
          </div>
          <div className="col s3 m2 valign center-align">
            {isNew && 
            <SaveLinkButton NavId="SaveForm" onSave={addComment} saving={saving} classes={style} actionIcon="add" />
            }
            {!isNew && <i className="material-icons">thumb_up</i>}
          </div>
        </div>
      </div>
    </li>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  auxIndex: PropTypes.number,
  action: PropTypes.string.isRequired,
  addComment: React.PropTypes.func.isRequired,
  updateComment: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default CommentItem;