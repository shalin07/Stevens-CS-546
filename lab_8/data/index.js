const searchRoutes = require("./search");

let constructorMethod = app => {
  app.use("/search", searchRoutes);
};

module.exports = {
  users: require("./search")
};