const fs = require("fs");
const db = require("./db");
const path = require("path");
const MAX_PLACE = 10;

const validate_input = (params, callback, fail_callback) => {
    if (!params.includes(undefined)) {
        callback();
    } else {
        fail_callback("Invalid Input(s)");
    }
}

const UserData = (user_id, callback, fail_callback) => {
    var query = "SELECT * FROM al_accounts WHERE id = $1"
    db.query(query, [user_id], (err, result) => {
        if (err) {
            fail_callback("Can not find the user data");
        } else {
            callback(result)
        }
    });
}

const StoryData = (story_path, callback, fail_callback) => {
    fs.access(story_path, fs.F_OK, (err) => {
        if (err) {
            fail_callback("Can not find the story");
        } else {
            callback();
        }
    });
}

const PlacesData = (lat, lon, callback, fail_callback) => {
    var query = "SELECT * FROM al_places ORDER BY cords <-> ST_Point($1, $2)::geometry LIMIT " + MAX_PLACE
    db.query(query, [lat, lon], (err, result) => {
        if (err) {
            fail_callback("Can not get place data");
        } else {
            callback(result);
        }
    });
}

module.exports.UserData = UserData;
module.exports.StoryData = StoryData;
module.exports.PlacesData = PlacesData;
