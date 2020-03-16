import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Components/Home";

export default function Routes() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
