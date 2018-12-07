import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";

function Modal(props) {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        {props.children}
      </div>
      <button onClick={() => props.dispatch(toggleModal())} className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export default connect(null, null)(Modal);
