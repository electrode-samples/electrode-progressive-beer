import React from "react";
import {Route, IndexRoute} from "react-router";
import About from "./components/about";
import BeerStyle from "./components/beer-style";
import BeerDetails from "./components/beer-details";
import Home from "./components/home";


export const routes = (
  <Route path="/">
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="beerstyle" component={BeerStyle}/>
    <Route path="beerdetails" component={BeerDetails}/>
  </Route>
);
