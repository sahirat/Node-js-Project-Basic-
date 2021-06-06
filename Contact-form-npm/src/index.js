const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");
const User = require("./models/userSchema");
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../public");

app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
app.set('view engine', "hbs");
app.get('/', (req, res) => {
    res.render('index');
})

app.post('/contact', async(req,res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) { 
        res.status(500).send(error);
    }
})
app.listen(port, () => {
    console.log("server is running on port:" +port);
})