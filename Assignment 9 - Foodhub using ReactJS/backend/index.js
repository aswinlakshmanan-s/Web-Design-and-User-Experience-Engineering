const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const router = require('./app/routes/userRouter');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', router);

app.use(function (req, res) {
    return res.status(404).send({message: "Route not found"});
});

app.listen(8000); 
console.log("Server Started at port 8000");

module.exports = app;