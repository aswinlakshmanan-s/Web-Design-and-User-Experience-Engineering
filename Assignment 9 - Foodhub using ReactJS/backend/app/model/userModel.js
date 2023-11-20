const collection = require('../utilities/connection');

const userModel = {};

//To check whether the user with email id exist or not 
userModel.findUserByEmail = (email) => {
    return collection.getUserCollection().then(model => {
        return model.findOne({ "email": email }).then((userData) => {
            if (userData === null) {
                return null;

            } else {
                return userData;
            }
        })
    })
}

//create user
userModel.createUser = (newUser) => {
    return collection.getUserCollection().then(userModel => {
        return userModel.create(newUser).then(data => {
            if (data)
                return true;
            else
                return false;
        })
    })
}

//get users
userModel.getAllUsers = () => {
    return collection.getUserCollection().then(userModel => {
        return userModel.find().then(users => users);
    });
}

//edit user
userModel.updateUser = (fullName, email, password) => {
    return collection.getUserCollection().then(model => {
        return model.updateOne({ "email": email }, { $set: { "fullName":fullName,"password": password } }).then((data) => {
            if (data.modifiedCount == 1) {
                return email;
            } else {
                return null;
            }
        })
    })
}

//delete user
userModel.deleteUser = (email) => {
    return collection.getUserCollection().then(model => {
        return model.deleteOne({ "email": email }).then((data) => {
            if (data.deletedCount == 1) {
                return email;
            } else {
                return null;
            }
        })
    })
}

module.exports = userModel;