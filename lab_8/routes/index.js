const searchRoute = require("./search");
const detailsSearch = require("./details")
const path = require("path");

const constructorMethod = app => {
  app.use("/search", searchRoute);
  app.use("/details", detailsSearch);
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("static/public.html"));
  });

};

module.exports = constructorMethod;