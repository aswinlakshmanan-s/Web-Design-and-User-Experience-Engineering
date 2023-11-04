var regExUserName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern.edu/;
var regExPassword1 = /(?=.*[0-9])/;
var regExPassword2 = /(?=.*[!@#$%^&*])/;

var validEmail = false;
var validUserName = false;
var validPassword = false;

$(document).ready(() => {
    $("input#emailId").bind('keyup', function (e) {
        validationCheck(e, "emailId");
    });
    $("input#userName").bind('keyup', function (e) {
        validationCheck(e, "userName");
    });
    $("input#password").bind('keyup', function (e) {
        validationCheck(e, "password");
    });
});

const validationCheck = (e, idText) => {
    var value, type, em;
    value = e.target.value;
    type = idText;
    em = "error_" + type;

    switch (type) {
        case "emailId":
            if (!value.trim().match(regExEmail)) {
                document.getElementById(em).style.display = "block";
                validEmail = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                validEmail = true;
            }
            break;
        case "userName":
            if (!value.trim().match(regExUserName)) {
                document.getElementById(em).style.display = "block";
                validUserName = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                validUserName = true;
            }
            break;

        case "password":
            if (isPasswordInvalid(value)) {
                document.getElementById(em).innerHTML = "Password should contain atleast 8 characters";
                document.getElementById(em).style.display = "block";
                validPassword = false;
            }
            else if (!value.trim().match(regExPassword1)) {
                document.getElementById(em).innerHTML = "Password should contain atleast 1 number";
                document.getElementById(em).style.display = "block";
                validPassword = false;
            }
            else if (!value.trim().match(regExPassword2)) {
                document.getElementById(em).innerHTML = "Password should contain atleast 1 special character";
                document.getElementById(em).style.display = "block";
                validPassword = false;
            }
            else {
                document.getElementById(em).style.display = "none";
                validPassword = true;
            }
            break;
    }

}

const isPasswordInvalid = password => {
    if (password.length < 8) return true;
    else return false;
}

const submitted = e => {
    if (e) {
        e.preventDefault();
    }
    if (validEmail && validUserName && validPassword) {
        alert("Login successful");
        resetForm();
        return true;
    }
    else {
        return false;
    }
}

function resetForm() {
    document.getElementById("myForm").reset();
}