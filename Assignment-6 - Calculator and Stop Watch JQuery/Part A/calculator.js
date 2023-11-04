var url = new URL(window.location);
var emailId = url.searchParams.get("emailId");
var userName = url.searchParams.get("userName");
var password = url.searchParams.get("password");
console.log(emailId, userName, password);

document.getElementById("userName").innerHTML = userName;

$(document).ready(() => {
    $(".error").hide();
    $(".btn-click").click(() => {
        var result;
        var in1 = $("#num1").val();
        var in2 = $("#num2").val();
        var op = event.target.id;

        if (in1 != "" && in2 != "") {
            if (isNaN(in1)) {
                $(".error").show();
            }
            else if (isNaN(in2)) {
                $(".error").show();
            }
            else {
                $(".error").hide();
                if (op == "add") {
                    result = parseInt(in1) + parseInt(in2);
                } else if (op == "subtract") {
                    result = parseInt(in1) - parseInt(in2);
                } else if (op == "divide") {
                    result = parseInt(in1) / parseInt(in2);
                } else if (op == "multiply") {
                    result = parseInt(in1) * parseInt(in2);
                }
                $("#total").val(result);
            }

        } else {
            $(".error").show();
        }
    });
});
