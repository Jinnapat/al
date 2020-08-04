const db = require('./db');

const change_date = (email, callback, fail_callback) => {
    var query = "UPDATE al_accounts SET last_active = NOW()::timestamp WHERE email = $1";
    db.query(query, [email], (err, result) => {
        if (err) {
            fail_callback("Error while update date");
        } else {
            callback();
        }
    });
}

const login_check = (email, password, callback, fail_callback) => {
    var query = "SELECT * FROM al_accounts WHERE email = $1 AND password = $2";
    db.query(query, [email, password], (err, result) => {
        if (result.rowCount == 1) {
            callback();
        } else {
            fail_callback("Wrong Email or Password");
        }
    });
}

const LoginHandler = (email, password, callback, fail_callback) => {
    login_check(email, password, () => {
        change_date(email, callback, fail_callback);
    }, fail_callback);
}

module.exports = LoginHandler;
