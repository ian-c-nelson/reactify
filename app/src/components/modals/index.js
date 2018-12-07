import React from "react";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";

function ModalController(props) {
  switch(props.activeModal){
    case "LoginModal":
      return <LoginModal />;
    default:
      return null;
  }
}

function mapStateToProps(state){
  return {
    activeModal: state.modal
  }
}

export default connect(mapStateToProps, null)(ModalController);
