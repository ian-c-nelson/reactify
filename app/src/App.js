import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state";

// Common Components
import Navbar from "./components/common/Navbar";
import ModalController from "./components/modals";

// Pages
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import AuthRoute from "./utils/AuthRoute";


function App(props) {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <div>
            <Navbar />
            <AuthRoute />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/documentation" component={AuthRoute(Post)} />
            </Switch>
          </div>
        </Router>
        <ModalController />
      </div>
    </Provider>
  );
}

export default App;
