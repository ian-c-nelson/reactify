import React, { useState } from "react";
import Modal from "./Modal";
import { Card, Header, Content } from "../common/Bulma/Card";

function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <Modal>
      <Card>
        <Header>Create an Account!</Header>
        <Content>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input
              placeholder="burrito@taco.com"
              className="input"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text" />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input
              placeholder="Secret Sauce"
              className="input"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password" />
          </div>
          <div className="field">
            <label className="label" htmlFor="rePassword">Re Enter Password</label>
            <input
              placeholder="Gotta Double Dip"
              className="input"
              name="rePassword"
              value={rePassword}
              onChange={e => setRePassword(e.target.value)}
              type="password" />
          </div>
          <div className="has-text-right">
            <button
              onClick={props.closeModal}
              className="button is-primary"
            >Cancel</button>
            <button className="button is-primary">Sign Up</button>
          </div>
        </Content>
      </Card>
    </Modal>
  );
}

export default SignUpModal;
