const express=require("express");
const router = express.Router();

const education = [
    {
        "schoolName": "Sahajanand",
        "degree": "Highschool",
        "favoriteClass": "PE",
        "favoriteMemory": "Won the best sportsplayer award"
    },
    {
        "schoolName": "LD College of Engineering",
        "degree": "B.Tech in Computer Engineeirng",
        "favoriteClass": "Algorithms",
        "favoriteMemory": "Appointed as captain of college Soccer team"
    },
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "MS in Computer Science",
        "favoriteClass": "Artificial Intelligence",
        "favoriteMemory": "Selected as Teaching Assistant of Artificial Intelligence"
    }
]

router.get("/", async (req, res) => {
    try {
      res.json(education);
    } catch (e) {
      res.status(500).send();
    }
  });

module.exports=router;
