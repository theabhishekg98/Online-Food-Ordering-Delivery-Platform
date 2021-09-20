const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// const bodyParser = require('body-parser');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'UberEatsDatabase'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/getCredentials', (req, res) => {
    const sqlSelect = "SELECT * from login";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    }); 
});

app.post('/addCredentials', (req, res) => {
    email = req.body.email;
    password = req.body.password;
    // console.log(email);
    // console.log(password);
    const sqlInsert = "INSERT INTO login VALUES (?,?)";
    db.query(sqlInsert, [email, password], (err, result)=> {
        console.log(result);
    });
});

app.listen(8000, () => {
    console.log("App listening on port 8000");
});