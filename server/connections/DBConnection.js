mysql = require('mysql');
var db;

function dbConnectionProvider() {
    if (!db) {
        db = mysql.createPool({
            connectionLimit: 10,
            host: "ubereatsdatabase.cs2ettlizwou.us-east-2.rds.amazonaws.com",
            user: "admin",
            password: "admin123",
            database:"ubereats"
        });
    }
    return db;
}
module.exports = dbConnectionProvider();


