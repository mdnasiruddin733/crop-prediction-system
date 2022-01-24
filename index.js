
const express = require("express")
const app = express()
const ejs = require("ejs")
  var fs = require('fs');
app.use(express.static(__dirname + "/public/"))
app.set("view engine", "ejs")
app.set("views", "./views")

const PORT=process.env.PORT || 3000
app.get("/", function (req, res)
{
    res.render("template.ejs");
})

app.listen(PORT)
