import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Links() {
  return (
    <React.Fragment>
      <Router>
        <Link to="/">Home</Link>
      </Router>
    </React.Fragment>
  );
}
