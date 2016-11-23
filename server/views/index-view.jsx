import ReduxRouterEngine from 'electrode-redux-router-engine';
import React from 'react';
import {routes} from "../../client/routes";
const Promise = require("bluebird");
import {createStore} from "redux";
import rootReducer from "../../client/reducers";
import beerStyles from "../plugins/beer/data/styles.json";

const DEFAULT_BEER_CARDS = 6;

function storeInitializer(req) {
  let initialState;

  if(req.path === "/") {
    let firstRender = req.url.query.prefetch_cards ? req.url.query.prefetch_cards : DEFAULT_BEER_CARDS;

    let data = beerStyles.data.slice(0, firstRender);

    initialState = {data};
  } else if(req.path === "/beerstyle") {
    let styleId = Number(req.url.query.style);
    let data = null;

    for (let i = 0 ; i < beerStyles.data.length; i++) {
      if (beerStyles.data[i].id === styleId){
        data = beerStyles.data[i];
        break;
      }
    }

    initialState = {data};
  } else {
    initialState = {};
  }

  return createStore(rootReducer, initialState);
}

function createReduxStore(req, match) {
  const store = storeInitializer(req);
  return Promise.all([
      // DO ASYNC THUNK ACTIONS HERE : store.dispatch(boostrapApp())
      Promise.resolve({})
    ]).then(() => {
      return store;
  });
}

// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore});
  }

  return app.routesEngine.render(req);
};
