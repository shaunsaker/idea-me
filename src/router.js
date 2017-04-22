import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./pages/App";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import AddIdea from "./pages/AddIdea";
import EditIdea from "./pages/EditIdea";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import SignIn from "./pages/SignIn";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./pages/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={RequireAuth(Home)} />
      <Route path="/ideas" component={RequireAuth(Ideas)} />
      <Route path="/add-idea" component={RequireAuth(AddIdea)} />
      <Route path="/edit-idea" component={RequireAuth(EditIdea)} />
      <Route path="/categories" component={RequireAuth(Categories)} />
      <Route path="/add-category" component={RequireAuth(AddCategory)} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="*" component={RequireAuth(NotFound)} />
    </Route>
  </Router>
);

// export
export { router };
