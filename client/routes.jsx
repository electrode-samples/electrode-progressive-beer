import React from "react";
import {Route, IndexRoute} from "react-router";
import About from "./components/about";
import Home from "./components/home";

export const routes = (
  <Route path="/">
    <IndexRoute component={Home}/>
    <Route path="about" component={About} />
  </Route>
);
