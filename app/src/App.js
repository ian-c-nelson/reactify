import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Provider} from "react-redux";
// import {createStore} from "redux"

import Navbar from "./components/common/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact component={Hello} />
            <Route path="/test" exact component={Test} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function Hello() {
  return <p>Hello!</p>
};

function Test() {
  return <p>Test!</p>
};

export default App;
