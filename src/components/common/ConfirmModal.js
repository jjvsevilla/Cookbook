import React, {PropTypes} from 'react';

const ConfirmModal = ({controlId, header, content, confirmAction, confirmText, cancelText, objectName, objectImageUrl}) => (
  <div id={controlId} className="modal">
    <div className="modal-content">

    <div className="row">
      <div className="col s12">
        <h4>{header}</h4>
        <p>{content}</p>
      </div>
      <div className="col s8 offset-s2">
        <p>
          <b>{objectName}</b>
        </p>
        <p>
          <img className="responsive-img modal-preview-img" src={objectImageUrl} title={objectName} />
        </p>
      </div>
      <div className="col s2">
      </div>
    </div>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-action waves-effect waves-green btn-flat" onClick={confirmAction}>{confirmText}</a>
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">{cancelText}</a>
    </div>
  </div>
);

ConfirmModal.propTypes = {
  controlId: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  confirmAction: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  objectName: PropTypes.string,
  objectImageUrl: PropTypes.string
};

export default ConfirmModal;