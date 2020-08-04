function validateForm() {
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    if (email == "") {
        document.forms["myForm"]["email"].focus();
    } else if (password == "") {
        document.forms["myForm"]["password"].focus();
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (xhttp.responseText == "LoggedIn") {
                     location.reload(); 
                } else {
                    alert(xhttp.responseText);
                }
            }
        };
        xhttp.open("POST", "/auth", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("email=" + email + "&password=" + password);
    }
}
