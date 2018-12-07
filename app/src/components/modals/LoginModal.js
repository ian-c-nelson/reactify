import React from "react";
import Modal from "./Modal";

function LoginModal(props) {
  return (
    <Modal>
      <form>
        <label htmlFor="firstname">Firstname!</label>
        <input type="text"/>
      </form>
    </Modal>
  )
}

export default (LoginModal);
