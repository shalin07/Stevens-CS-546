const express=require("express");
const router = express.Router();

const about = {
    "name": "Barot Shalin",
    "cwid": "10438998",
    "biography": "My name is Shalin Barot and I'm pursuing my MS in CS at Stevens Tech. \nI completed my undergrad in computer engineering in LD college of Engineering back in India",
    "favoriteShows": ["Game of Thrones", "Flash", "Sherlock Holmes", "Breaking Bad"],
    "hobbies": ["Soccer", "TV series", "Swimming", "Sleeping"]
  }

router.get("/", async (req, res) => {
  try {
      res.json(about);
    } catch (e) {
      res.status(500).send();
    }
  });

  
module.exports = router;