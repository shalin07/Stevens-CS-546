const animalsRoutes = require("./animals");
const postsRoutes = require("./posts");
const likesRoutes = require('./likes')


const constructorMethod = app => {
  app.use("/animals", animalsRoutes);
  app.use("/posts", postsRoutes);
  app.use("*", (req, res) => {
  res.status(404).json({ error: "Data not found" });
  });
};

module.exports = constructorMethod;