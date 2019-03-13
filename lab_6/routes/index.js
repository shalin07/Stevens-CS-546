const storyRoutes = require("./story");
const aboutRoutes = require("./about");
const educationRoutes = require("./education");

const constructorMethod = app => {
  app.use("/story", storyRoutes);
  app.use("/about", aboutRoutes);
  app.use("/education", educationRoutes);


  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;