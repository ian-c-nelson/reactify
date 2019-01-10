import React from "react";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function ModalController(props) {
  console.log("MODALCONTROLLER PROPS", props);
  switch(props.activeModal){
    case "LoginModal":
      return <LoginModal />;
    case "SignUpModal":
      return <SignUpModal />;
    default:
      return null;
  }
}

function mapStateToProps(state){
  return {
    activeModal: state.modal,
    burrito: state.auth
  }
}

export default connect(mapStateToProps, null)(ModalController);
