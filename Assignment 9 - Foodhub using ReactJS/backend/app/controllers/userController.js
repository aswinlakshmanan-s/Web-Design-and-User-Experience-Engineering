const bcrypt = require('bcrypt');
const userService = require('../services/userService');
const User = require('../model/User')
const validator = require('../utilities/Validator');

const getUsers = (req, res) => {
    userService.getAllUsers().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        res.status(400);
        res.json({ "message": err.message })
    });
};

const createUser = async (req, res) => {
    try {
        validator.validateFullName(req.body.fullName);
        validator.validateEmail(req.body.email);
        validator.validatePassword(req.body.password);

        let salt = await bcrypt.genSalt(15);
        let hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;

        const user = new User(req.body);

        userService.createUser(user).then(result => {
            if (result != null)
                res.json("User created Successfully");
        }).catch(err => {
            res.status(400);
            res.json({ "message": err.message });
        });
    }
    catch (err) {
        res.status(400);
        res.json({ "message": err.message });
    }
}

const editUser = async (req, res) => {
    try {
        let fullName = req.body.fullName;
        let email = req.body.email;
        let password = req.body.password;

        validator.validateFullName(fullName);
        validator.validateEmail(email);
        validator.validatePassword(password);

        let salt = await bcrypt.genSalt(15);
        let hash = await bcrypt.hash(req.body.password, salt);

        password = hash;

        userService.updateUser(fullName, email, password).then((result) => {
            res.status(200);
            res.json(`User ${result} updated successfully`);
        }).catch((err) => {
            res.status(400);
            res.json({ "message": err.message });
        });
    }
    catch (err) {
        res.status(400);
        res.json({ "message": err.message });
    }
}

const deleteUser = (req, res) => {
    try {
        let email = req.body.email;
        validator.validateEmail(email);

        userService.deleteUser(email).then(result => {
            res.status(200)
            res.json(`User ${result} deleted successfully`);
        }).catch(err => {
            res.status(400);
            res.json({ "message": err.message })
        });
    }
    catch (err) {
        res.status(400);
        res.json({ "message": err.message });
    }
}

module.exports = { getUsers, createUser, editUser, deleteUser };