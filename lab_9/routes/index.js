const constructorMethod = app => {
 
  app.use("/", (req, res) => {
    res.render("index");
  });
  
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
