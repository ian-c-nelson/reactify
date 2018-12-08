import React from "react";
import Modal from "./Modal";

function LoginModal(props) {
  return (
    <Modal>
      <form className="box">
        <div className="field">
          <label className="label" htmlFor="firstname">Firstname!</label>
          <input placeholder="First Name" className="input" type="text" />
        </div>
      </form>
    </Modal>
  )
}

export default (LoginModal);
