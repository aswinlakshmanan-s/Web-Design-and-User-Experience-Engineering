const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routes = require('./app/routes');
const bodyParser = require("body-parser");

require("dotenv").config();

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Connection to MongoDB successful");
}).catch(() => {
    console.log("Connection to MongoDB failed");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

routes(app);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})