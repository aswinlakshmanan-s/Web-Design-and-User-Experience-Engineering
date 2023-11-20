let Validator = {};

//to validate user full name
Validator.validateFullName = function (name) {
    if(name == ""){
        let err = new Error('Please enter the full name.');
        err.status = 400;
        throw err;
    }
    let check = String(name).match( /^[a-zA-Z]+[a-zA-Z ]*$/ )
    if (!check) {
        let err = new Error('Not a valid full name. Full Name should contain only alphabets and space.');
        err.status = 400;
        throw err;
    }
}

//to validate email
Validator.validateEmail = function (email) {
    if(email == ""){
        let err = new Error('Please enter the email.');
        err.status = 400;
        throw err;
    }
    let check = String(email).match( /^([a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?)$/ )
    if (!check) {
        let err = new Error('Not a valid email.');
        err.status = 400;
        throw err;
    }
}

//to validate password
Validator.validatePassword = function (password) {
    if(password == ""){
        let err = new Error('Please enter the password.');
        err.status = 400;
        throw err;
    }
    let check = String(password).match( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/ )
    if (!check) {
        let err = new Error('Not a valid password. Password should contain atleast one lowercase letter, uppercase letter, digit and special character having length between 8 and 20.');
        err.status = 400;
        throw err;
    }
}

module.exports = Validator;