const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'UberEatsDatabase'
});

app.get("/", (req, res) => {
    
})

app.listen(3001, () => {
    console.log("App listening on port 3001");
});