function validateForm() {
    var email = document.forms["myForm"]["email"].value;
    var code = document.forms["myForm"]["code"].value;
    if (email == "") {
        document.forms["myForm"]["email"].focus();
    } else if (code == "") {
        document.forms["myForm"]["code"].focus();
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (xhttp.responseText == "Verified") {
                    alert("Account Verified");
                    location.assign("/"); 
                } else {
                    alert(xhttp.responseText);
                }
            }
        };
        xhttp.open("POST", "/verify", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("email=" + email + "&code=" + code);
    }
}
