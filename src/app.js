const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 8000;
// console.log(path.join(__dirname,"../template/views"));



// Setup of view engine
const templatePath = path.join(__dirname,"../templates/views");
const partailPath = path.join(__dirname,"../templates/partial");
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partailPath);


// To Serve Static Page
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));




// Routing Here
app.get("/",(req,res) =>{
    res.render("index");
});

app.get("/about",(req,res) =>{
    res.render("about");
});

app.get("/weather",(req,res) =>{
    res.render("weather");
});

app.get("*",(req,res) =>{
    res.render("404error");
});

app.listen(port, () =>{
    console.log(`Listening to the port number ${port}`);
})