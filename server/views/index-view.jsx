import ReduxRouterEngine from 'electrode-redux-router-engine';
import React from 'react';
import {routes} from "../../client/routes";
import {createStore} from "redux";
import rootReducer from "../../client/reducers";
import beerStyles from "../plugins/beer/data/styles.json";
import injectTapEventPlugin from 'react-tap-event-plugin';

const Promise = require("bluebird");
const fs = require('fs');

const DEFAULT_BEER_CARDS = 300;

function importBeers(styleId){
  let result = [];
  let counter = 0;

  let styleMetaData = fs.readFileSync(__dirname + '/../plugins/beer/data/beers-style-' + styleId + '-page-1.json', 'utf8');
  if(!styleMetaData) throw err;

  let totalPages = JSON.parse(styleMetaData).numberOfPages;

  for(let pages = 1; pages <= totalPages; pages++) {

    let styleData = fs.readFileSync(__dirname + '/../plugins/beer/data/beers-style-' + styleId + '-page-' + pages + '.json', 'utf8');
    if(!styleData) throw err;

    let parsedStyleData = JSON.parse(styleData);
    parsedStyleData = parsedStyleData.data;

    Object.keys(parsedStyleData).forEach(function(key) {
      result[counter++] = parsedStyleData[key];
    });
  }

  return result;
}

function storeInitializer(req) {
  let initialState;

  if(req.path === "/") {
    let firstRender = req.url.query.prefetch_cards ? req.url.query.prefetch_cards : DEFAULT_BEER_CARDS;
    let data = beerStyles.data.slice(0, firstRender);

    initialState = {data};
  } else if(req.path === "/beerstyle") {
    let styleId = Number(req.url.query.style);
    let data = null;
    let beersOfStyleID = importBeers(styleId);

    for (let i = 0; i < beerStyles.data.length; i++) {
      if (beerStyles.data[i].id === styleId){
        data = beerStyles.data[i];
        break;
      }
    }

    data.beers = beersOfStyleID;
    initialState = {data};
  } else if(req.path === "/beerdetails") {
    let styleId = Number(req.url.query.style);
    let beerId = req.url.query.beer;
    let data = null;
    let beers = importBeers(styleId);

    for (let i = 0; i < beers.length; i++) {
      if (beers[i].id === beerId){
        data = beers[i];
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
  // For Warning: Material UI: userAgent should be supplied in the muiTheme context for server-side rendering
  global.navigator = global.navigator || {};
  global.navigator.userAgent = req.headers['user-agent'] || 'all';

  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    // For Warning: Unknown prop `onTouchTap` on <button> tag.
    injectTapEventPlugin();
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore});
  }

  return app.routesEngine.render(req);
};
