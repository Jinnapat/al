const db = require('./db');

const create_real_account = (username, email, password, callback, fail_callback) => {
    var query = "INSERT INTO al_accounts VALUES (DEFAULT, $1, $2, $3, NOW()::timestamp, NOW()::timestamp, 0, 0, 0)";
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            fail_callback("Error While Create Real Account");
        } else {
            callback();
        }
    });
}

const delete_temp_account = (email, callback, fail_callback) => {
    var query = "DELETE FROM temp_accounts WHERE email = $1";
    db.query(query, [email], (err, result) => {
        if (err) {
            fail_callback("Error While Deletes Temporary Account");
        } else {
            callback();
        }
    });
}

const verify_code = (email, code, callback, fail_callback) => {
    var query = 'SELECT * FROM temp_accounts WHERE email = $1 AND code = $2';
    db.query(query, [email, code], (err, result) => {
        if (result.rowCount == 1) {
            var row = result.rows[0];
            var username = row.username;
            var email = row.email;
            var password = row.password;
            callback(username, email, password);
        } else {
            fail_callback("Wrong Email or Code");
        }
    });
}
const VerifyHandler = (email, code, callback, fail_callback) => {
    verify_code(email, code, (username, email, password) => {
        delete_temp_account(email, () => {
            create_real_account(username, email, password, callback, fail_callback);
        }, fail_callback);
    }, fail_callback);
}

module.exports = VerifyHandler;
