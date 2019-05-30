const express = require("express");
const router = express.Router();
const searchData = require("../data/search");

router.post("/", async (req, res) => {
  let body = req.body;
  let name = body['fname'];
  let hasErrors = false;
  let errors = [];

  if(typeof name === 'undefined' || name.length === 0){
    hasErrors = true;
    errors.push("No string entered!");
    res.status(400);
    res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
    return;
  }
  const peopleList = await searchData.getPersonByName(name);

  let renderData = {
    people: peopleList,
    fname: name
  }
  res.render("users/index", renderData);
});

module.exports = router;