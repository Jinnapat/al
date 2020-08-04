const LoginHandler= require("./login.js");
const RegisterHandler = require("./register.js");
const VerifyHandler= require("./verify.js");

const validate_input = (params, callback, fail_callback) => {
    if (!params.includes(undefined)) {
        callback();
    } else {
        fail_callback("Invalid Input(s)");
    }
}

const check_status = (logged_in, callback, fail_callback) => {
    if (!logged_in) {
        callback();
    } else {
        fail_callback("Already logged In");
    }
}

const Login = (logged_in, username, password, callback, fail_callback) => {
    check_status(logged_in, () => {
        validate_input([username, password], () => {
            LoginHandler(username, password, callback, fail_callback);
        }, fail_callback);
    }, fail_callback);
}

const Register = (logged_in, username, email, password, callback, fail_callback) => {
    check_status(logged_in, () => {
        validate_input([username, email, password], () => {
            RegisterHandler(username, email, password, callback, fail_callback);
        }, fail_callback);
    }, fail_callback);
}
    
const Verify = (logged_in, email, code, callback, fail_callback) => {
    check_status(logged_in, () => {
        validate_input([email, code], () => {
            VerifyHandler(email, code, callback, fail_callback);
        }, fail_callback);
    }, fail_callback);
}

module.exports.Login = Login;
module.exports.Register = Register;
module.exports.Verify = Verify;
