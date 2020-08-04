const db = require("./db");
const validator = require("email-validator");
const crypto = require("crypto");

const delete_existed_temp_account = (email, callback, fail_callback) => {
    var query = "DELETE FROM temp_accounts WHERE email = $1"
    db.query(query, [email], (err, result) => {
        if (err) {
            fail_callback("Error while delete existed temporary account");
        } else {
            callback();
        }
    });
}

const create_temp_account = (username, email, password, code, callback, fail_callback) => {
    var query = "INSERT INTO temp_accounts VALUES (DEFAULT, $1, $2, $3, $4)";
    db.query(query, [username, email, password, code], (err, result) => {
        if (err) {
            fail_callback("Error While create temporary account");
        } else {
            callback();
        }
    });
}

const check_email = (email, callback, fail_callback) => {
    if (validator.validate(email)) {
        var query = 'SELECT * FROM al_accounts WHERE email = $1';
        db.query(query, [email], (err, result) => {
            if (result.rowCount == 0) {
                callback();
            } else {
                fail_callback("Email is already taken");
            }
        });
    } else {
        fail_callback("Not an email");
    }
}

const RegisterHandler = (username, email, password, callback, fail_callback) => {
    check_email(email, () => {
        delete_existed_temp_account(email, () => {
            crypto.randomBytes(24, (err, buf) => {
                if (err) {
                    fail_callback("Could not generate verification Code");
                } else {
                    var code = buf.toString("hex");
                    create_temp_account(username, email, password, code, callback, fail_callback);
                    
                }
            }, fail_callback);
        }, fail_callback);
    }, fail_callback);
}

module.exports = RegisterHandler;
