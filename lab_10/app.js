const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcryptjs');
const exphbs = require("express-handlebars");

const data = require("./users");

const app = express();
app.use(cookieParser());

const static = express.static(__dirname + "/public");

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use("/private", function(req, res, next){

  if(!req.cookies.AuthCookie)
  {
    let hasErrors = true;
    let errors = [];
    errors.push("Not Authorised, Please Login");
    
    res.status(403).render("layouts/main", {hasErrors:hasErrors, errors: errors});
  }
  else
  {
    next();
  }
});

// app.get("/logout", (req, res, next) => {
//     res.clearCookie('name')
//     res.redirect("/")
// });

app.get("/", async (req, res) => {

  if(!req.cookies.AuthCookie)
  {
    let hasErrors = false;
    let errors = [];
    res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
  }
  else
  {
    let id = req.cookies.AuthCookie;
    let userData = await getUserData(id);

    res.render("users/private", userData);
  }

});

app.post("/login", async (req, res) => {

  let hasErrors = false;
  let errors = [];

  if(req.cookies.AuthCookie)
  {
    let username = req.cookies.AuthCookie;
    let userData = await getUserData(username);

    res.render("users/private", userData);
  }
  else
  {
    let userName = req.body.username;
    let password = req.body.password;
    let hashedPassword = "";

    for(let i in data.users)
    {
      if(data.users[i].username === userName)
      {
        hashedPassword = data.users[i].hashedPassword;
      }
    }

    if(hashedPassword.length <= 0)
    {
        hasErrors = true;
        errors.push("Invalid Username/Password");
        res.status(500);
        res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
    }
    else
    {
      let isSame = await bcrypt.compare(password, hashedPassword);

      if(isSame)
      {
        let userId = await getUserId(userName);
        let userData = await getUserData(userId);
        res.cookie("AuthCookie", userId);
        res.render("users/private", userData);
      }
      else
      {
        hasErrors = true;
        errors.push("Invalid Username/Password");
        res.status(500);
        res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
      }
    }
  }

});

app.get("/private", async (req, res) => {
  let id = req.cookies.AuthCookie;
  let userData = await getUserData(id);

  res.render("users/private", userData);
})

app.get("/logout", async (req, res) => {

  if(req.cookies.AuthCookie)
  {
    res.clearCookie("AuthCookie");
  }

  res.render("users/logout");
})

async function getUserData(id)
{
  let userData = {};
    
    for(let i in data.users)
    {
      if(data.users[i]._id === id)
      {
        userData.username = data.users[i].username;
        userData.firstName = data.users[i].firstName;
        userData.lastName = data.users[i].lastName;
        userData.profession = data.users[i].profession;
        userData.bio = data.users[i].bio;
      }
    }

    return userData;
}

async function getUserId(username)
{    
    let id = "";
    for(let i in data.users)
    {
      if(data.users[i].username === username)
      {
        id = data.users[i]._id;
      }
    }

    return id;
}

app.listen(3000, () => {
  console.log("We've now got a server!");
  if (process && process.send) process.send({done: true});
});