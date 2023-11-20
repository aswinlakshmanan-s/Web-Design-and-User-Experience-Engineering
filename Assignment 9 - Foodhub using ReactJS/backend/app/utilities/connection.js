const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

let connection = {};

let schema = {
    "fullName": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true
    }
}

const userSchema = new Schema(schema, { collection: "User", timestamps: true });

connection.getUserCollection = async () => {
    console.log(process.env.DATABASE);
    try {
        return (await mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })).model("User", userSchema);
    } catch (err) {
        let error = new Error("Could not connect to database");
        error.status = 500;
        throw error;
    }
}

module.exports = connection;