const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const e = require("express");
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

app.post('/register', (req, res) => {
    email = req.body.email;
    password = req.body.password;

    const sqlInsert = "INSERT INTO login VALUES (?,?)";
    db.query(sqlInsert, [email, password], (err, result)=> {
        if(err){ 
            res.send({err: err});
        } else {
            console.log("Registration successful!");
            console.log(result);
        }
    });
});

app.post('/login', (req, res) => {
    email = req.body.email;
    password = req.body.password;

    const sqlLoginCheck = "SELECT * from login WHERE email = ? AND password = ?";
    db.query(sqlLoginCheck, [email, password], (err, result)=> {
        // console.log("RESULT = ");
        // console.log(result);
        if(err){ 
            res.send({err: err});
        } else {
            if(result.length > 0) {
                console.log("User found!");
                res.send(result);
            } else {
                console.log("User not found!");
                res.send({message: "Incorrect username / password!"})
            }
        }
    });
});


app.listen(8000, () => {
    console.log("App listening on port 8000");
});