function vfun(formName) {
    if (formName === "myform1") {
        var uname = document.forms["myform1"]["uname"].value;
        var password = document.forms["myform1"]["password"].value;
        
        if (uname == null || uname == "") {
            document.getElementById("errorbox").innerHTML = "Enter the user name";
            return false;
        }
        if (password == null || password == "") {
            document.getElementById("errorbox").innerHTML = "Enter the password";
            return false;
        }
        if (uname != '' && password != '') {
            window.alert("Login successfully");
            return true;
        }
    } else if (formName === "myform2") {
        var uname1 = document.forms["myform2"]["uname1"].value;
        var email = document.forms["myform2"]["email"].value;
        var password1 = document.forms["myform2"]["password1"].value;
        var password2 = document.forms["myform2"]["password2"].value;
        
        if (uname1 == null || uname1 == "") {
            document.getElementById("errorbox").innerHTML = "Enter the username";
            return false;
        }
        if (email == null || email == "") {
            document.getElementById("errorbox").innerHTML = "Enter the email";
            return false;
        }
        if (password1 == null || password1 == "") {
            document.getElementById("errorbox").innerHTML = "Enter the password";
            return false;
        }
        if (password2 == null || password2 == "") {
            document.getElementById("errorbox").innerHTML = "Enter the password";
            return false;
        }
        if (uname1 != '' && password1 != '' && password2 != '' && email != '') {
            window.alert("Registration successfully");
            return true;
        }
    }
}
