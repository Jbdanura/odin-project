var express = require("express")
var app = express()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];

app.use(express.urlencoded({
  extended: true
}))

app.set("view engine","jade")
app.get("/",function(req,res){
    res.render("index",{title:"Mini Message Board", messages:messages})
})

app.route("/new").get(function(req,res){
    res.render("form")
})

app.route("/new").post(function(req,res){
  const name = req.body.name
  const message = req.body.message
  if(name && message){
    messages.splice(0,0,{text:message,user:name,added: new Date()})
  }
  res.redirect("/")
  res.end()
})


var port = 3000
var server=app.listen(port, function() {
    console.log("running on port " + port)
})
