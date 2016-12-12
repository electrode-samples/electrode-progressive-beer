module.exports = {
  cache: {
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }, {
      handler: "fastest",
      urlPattern: "/getBeerStyles/"
    }, {
      handler: "fastest",
      urlPattern: "/\/about$/"
    }, {
      handler: "fastest",
      urlPattern: "/^https?:\/\/fonts.gstatic.com\//"
    }, {
      handler: "fastest",
      urlPattern: "/^https?:\/\/fonts.googleapis.com\//"
    }, {
      handler: "fastest",
      urlPattern: "/^https?:\/\/ajax.googleapis.com\//"
    }],
    importScripts: ['./sw-events.js'],
    staticFileGlobs: ["dist/js/*.{js,css,png,jpg,svg}"]
  },
  manifest: {
    background: "#FFFFFF",
    logo: "./images/beer-icon-240.png",
    title: "Electrode Progressive Beer",
    short_name: "EPB",
    theme_color: "#FFFFFF"
  }
};
