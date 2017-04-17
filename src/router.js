import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./pages/App";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import AddIdea from "./pages/AddIdea";
import RequireAuth from "./components/RequireAuth";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={RequireAuth(Home)} />
      <Route path="/ideas" component={RequireAuth(Ideas)} />
      <Route path="/add" component={RequireAuth(AddIdea)} />
    </Route>
  </Router>
);

// export
export { router };
