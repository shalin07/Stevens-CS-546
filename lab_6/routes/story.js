const express = require("express");
const router = express.Router();

const story = {
    "storyTitle": "Downfall of Real Madrid",
    "story": "Downfall of Real Madrid started when they sold Cristiano Ronaldo and Zinedin Zidane left Madrid. Now Madrid has no consistent player who score 50+ goals every season for Madrid. No spark is \nleft in Madrid anymore. It's not like Madrid was great because of Ronaldo but Ronaldo made Madrid great. His passion is what madrid is missing rightnow. \nFirst started with losing against small clubs in league now we're out of league. Lost against Barca at Home last week cost us CDR, and it was not over yet and finally today we're out of Champions \nleague too after losing against Ajax 4-1 at home. And now we're out of all leagues. It was never going too be easy without the man himself. \nBut I'm really hopefull that Madrid will be back stronger as everytime they does from their bad times and will be European Champion once again."
}

router.get("/", async (req, res) => {
  try {
    
    res.json(story);
  } catch (e) {
    res.status(500).send();
  }
});


module.exports = router;