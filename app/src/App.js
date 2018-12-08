import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Common Components
import Navbar from "./components/common/Navbar";
import ModalController from "./components/modals";

// Pages
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/post" component={Post} />
              </Switch>
            </div>
          </Router>
          <ModalController />
        </div>
      </Provider>
    );
  }
}

export default App;
