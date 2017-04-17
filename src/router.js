import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./pages/App";
import Home from "./pages/Home";
import RequireAuth from "./components/RequireAuth";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={RequireAuth(Home)} />
    </Route>
  </Router>
);

// export
export { router };
