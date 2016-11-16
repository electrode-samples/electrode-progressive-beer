"use strict";

const fs = require("fs");

exports.register = (server, options, next) => {
  const getBeerStyles = (reply) => {
    fs.readFile(`${__dirname}/data/styles.json`, "utf8", (err, beerStyles) => {
      if (err) {
        throw err;
      }

      reply(null, JSON.parse(beerStyles));
    });
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
