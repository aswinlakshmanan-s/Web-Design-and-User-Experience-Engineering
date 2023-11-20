const User = require('../model/User');
const userdb = require('../model/userModel');
const validator = require('../utilities/Validator');

const bcrypt = require('bcrypt');

let UserService = {};

UserService.createUser = (UserObj) => {
    return userdb.findUserByEmail(UserObj.email).then(object => {
        {
            if (object != null) {
                let err = new Error("User already exists with this email");
                err.status = 404;
                throw err;
            } else {
                return userdb.createUser(UserObj).then((data) => {
                    if (data) {
                        return data;
                    }
                    else {
                        let err = new Error("Unable to Create");
                        err.status = 404;
                        throw err;
                    }
                })
            }
        }
    })
}

UserService.getAllUsers = () => {
    return userdb.getAllUsers().then(users => {
        if (users.length == 0) {
            let error = new Error("No users found in the database");
            error.status = 404;
            throw error;
        }
        else
            return users;
    })
}

UserService.updateUser = (fullName, email, password) => {
    return userdb.findUserByEmail(email).then(object => {
        if (object && object.email == email) {
            return userdb.updateUser(fullName, email, password).then((data) => {
                if (data) {
                    return object.email;
                } else {
                    let err = new Error("User update failed");
                    err.status = 503;
                    throw err;
                }
            })
        } else {
            let err = new Error("User does not exist");
            err.status = 404;
            throw err;
        }
    })
}

UserService.deleteUser = (email) => {
    return userdb.findUserByEmail(email).then(object => {
        if (object && object.email == email) {
            return userdb.deleteUser(email).then((data) => {
                if (data) {
                    return object.email;
                } else {
                    let err = new Error("User delete failed");
                    err.status = 503;
                    throw err;
                }
            })
        } else {
            let err = new Error("User does not exist");
            err.status = 404;
            throw err;
        }
    })
}

module.exports = UserService;