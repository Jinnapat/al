const { Pool } = require('pg');
const pool = new Pool();

module.exports = {
    query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, result) => {
        if (err) {
            console.log(text + " : " + params);
            throw err;
        }
        const duration = Date.now() - start;
        console.log('executed query', { text, duration, rows: result.rowCount });
        callback(err, result);
    });
    },
};
