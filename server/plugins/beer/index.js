"use strict";

const fs = require("fs");
import beerStyles from "./data/styles.json";

exports.register = (server, options, next) => {
  const getBeerStyles = (reply) => {
    reply(null, beerStyles);
  };

  server.route({
    method: "GET",
    path: "/getBeerStyles",
    handler: (request, reply) => getBeerStyles(reply)
  });

  next();
};

exports.register.attributes = {
  name: "getBeer",
  version: "0.0.1"
};
