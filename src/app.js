const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage");

const hbs =  require("hbs");
const { registerPartials } = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

// Setting the path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

// console.log(path.join(__dirname, "../public"));

// Middlewares
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))

app.use(express.urlencoded({extended: false}));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

// routing
// app.get(path, callback)
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/ar", (req, res) => {
    res.render("ar");
});
app.get("/flask", (req, res) => {
    res.render("flask");
});
app.get("/social", (req, res) => {
    res.render("social");
});



app.post("/contact", async(req, res) => {
    try{
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("contact");
    } catch(error) {
        // res.status(500).send(error);
    }
})




// server create
app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`);
})