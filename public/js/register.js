function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var passwordConfirm = document.forms["myForm"]["passwordConfirm"].value;
    if (username == "") {
        document.forms["myForm"]["username"].focus();
    } else if (email == "") {
        document.forms["myForm"]["email"].focus();
    } else if (password == "") {
        document.forms["myForm"]["password"].focus();
    } else if (passwordConfirm == "") {
        document.forms["myForm"]["passwordConfirm"].focus();
    } else if (password != passwordConfirm) {
        alert("Passwords do not match.")
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (xhttp.responseText == "Registered") {
                     location.assign("/?action=verify");
                } else {
                    alert(xhttp.responseText);
                }
            }
        };
        xhttp.open("POST", "/regist", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("username=" + username + "&email=" + email + "&password=" + password);
    }
}
