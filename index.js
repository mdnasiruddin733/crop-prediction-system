
const express = require("express")
const app = express()
const ejs = require("ejs")
  var fs = require('fs');
app.use(express.static(__dirname + "/public/"))
app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/", function (req, res)
{
    res.render("template.ejs");
})

app.listen(3000)
