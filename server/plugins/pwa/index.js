"use strict";

exports.register = function (server, options, next) {
  server.route({
    method: "GET",
    path: "/sw.js",
    handler: {
      file: "dist/sw.js"
    }
  });
  next();
};

exports.register.attributes = {
  name: "pwa",
  version: "0.0.1"
};
