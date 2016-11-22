"use strict";

import beerStyles from "./data/styles.json";

const DEFAULT_BEER_CARDS = 6;

exports.register = (server, options, next) => {
  const getBeerStyles = (request, reply) => {
    const secondRender = request.url.query.prefetch_cards ?
      request.url.query.prefetch_cards :
      DEFAULT_BEER_CARDS;

    reply({data: beerStyles.data.slice(secondRender)});
  };

  server.route({
    method: "GET",
    path: "/getBeerStyles",
    handler: (request, reply) => getBeerStyles(request, reply)
  });

  next();
};

exports.register.attributes = {
  name: "getBeer",
  version: "0.0.1"
};
