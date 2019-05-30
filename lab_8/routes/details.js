const express = require("express");
const router = express.Router();
const peopleData = require("../data/search");

router.get("/:id", async (req, res) => {
  const people1 = await peopleData.getPersonById(req.params.id);
  res.render("users/single", { people: people1 });
});

module.exports = router;