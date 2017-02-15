module.exports = {
  cache: {
    cacheId: "electrode-progressive-beer",
    stripPrefix: "dist/js/",
    importScripts: ['./sw-events.js'],
    staticFileGlobs: ["dist/js/*.{js,css,png,jpg,svg}"],
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }, {
      handler: "fastest",
      urlPattern: "\/about"
    }, {
      handler: "fastest",
      urlPattern: "\/beerstyle"
    }, {
      handler: "fastest",
      urlPattern: "\/beerdetails"
    }, {
      handler: "fastest",
      urlPattern: "\/getBeerStyles"
    }, {
      handler: "fastest",
      urlPattern: "/^https?:\/\/fonts.gstatic.com\//"
    }, {
      handler: "fastest",
      urlPattern: "/^https?:\/\/fonts.googleapis.com\//"
    }, {
      handler: "fastest",
      urlPattern: "/^https?:\/\/ajax.googleapis.com\//"
    }]
  },
  manifest: {
    background: "#FFFFFF",
    logo: "./images/beer-icon-240.png",
    title: "Electrode Progressive Beer",
    short_name: "EPB",
    theme_color: "#FFFFFF"
  }
};
