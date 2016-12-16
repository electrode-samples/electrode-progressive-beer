import "isomorphic-fetch";
import React from "react";
import {render} from "react-dom";
// import Helmet from "react-helmet";
import {Router, browserHistory} from "react-router";
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import DevTools from "../client/devtools";
import rootReducer from "./reducers";
import {routes} from "./routes";
import "./styles/base.css";

require.ensure(["./sw-registration"], (require) => {
  require("./sw-registration")();
}, "sw-registration");

const enhancer = compose(
  // Add middlewares you want to use in development:
  // applyMiddleware(d1, d2, d3),
  applyMiddleware(thunk),
  DevTools.instrument()
);

window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = createStore(rootReducer, initialState, enhancer);

  render(
      <Provider store={store}>
        {/* <Helmet
          link={[
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"},
            {"rel": "canonical", "href": "http://mysite.com/example"}
          ]}
          script={[{"src": "http://include.com/pathtojs.js", "type": "text/javascript"}]}
        /> */}
        <div>
          <Router history={browserHistory}>{routes}</Router>
          <DevTools />
        </div>
      </Provider>,
    document.querySelector(".js-content")
  );
};
