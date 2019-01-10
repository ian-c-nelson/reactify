import React from "react";
import { connect } from "react-redux";
import { changeModal } from "../../state/modal/actions";
import { Link } from "react-router-dom";

function Navbar(props) {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img alt="header-logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a href="#burger" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/documentation" className="navbar-item">Documentation</Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button onClick={props.signUpModal}className="button is-primary">
              <strong>Sign up</strong>
            </button>
            <button onClick={props.loginModal} className="button is-light">Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    loginModal() {
      dispatch(changeModal("LoginModal"));
    },
    signUpModal(){
      dispatch(changeModal("SignUpModal"));
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar);
