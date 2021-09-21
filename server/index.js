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
    const sqlSelect = "SELECT * from customer_login";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    }); 
});

app.post('/customer_register', (req, res) => {
    cname = req.body.name;
    email = req.body.email;
    password = req.body.password;

    console.log("1");

    const sqlLoginCheck = "SELECT * from customer_login WHERE email = ?";
    db.query(sqlLoginCheck, [email], (err, result)=> {
        console.log("2");
        if(err){ 
            console.log("3");
            res.send({err: err});
        } else {
            console.log("4");
            if(result.length > 0) {
                console.log("User already exists!");
            } else {
                console.log("5");
                const sqlInsert = "INSERT INTO customer_login VALUES (?,?,?)";
                db.query(sqlInsert, [cname, email, password], (err, result)=> {
                    if(err){ 
                        console.log("6");
                        res.send({err: err});
                    } else {
                        console.log("Registration successful!");
                        console.log(result);
                    }
                });
            }
        }
    });
});

app.post('/restaurant_register', (req, res) => {
    rname = req.body.name;
    email = req.body.email;
    password = req.body.password;
    location = req.body.location;
    const sqlLoginCheck = "SELECT * from restaurant_login WHERE email = ?";
    db.query(sqlLoginCheck, [email], (err, result)=> {
        if(err){ 
            res.send({err: err});
        } else {
            if(result.length > 0) {
                console.log("Restaurant already exists!");
                res.send(result);
            } else {
                const sqlInsert = "INSERT INTO restaurant_login VALUES (?,?,?,?)";
                db.query(sqlInsert, [rname, email, password, location], (err, result)=> {
                    if(err){ 
                        res.send({err: err});
                    } else {
                        console.log("Registration successful!");
                        console.log(result);
                    }
                });
            }
        }
    });
});

app.post('/customer_login', (req, res) => {
    email = req.body.email;
    password = req.body.password;

    const sqlLoginCheck = "SELECT * from customer_login WHERE email = ? AND password = ?";
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

app.post('/restaurant_login', (req, res) => {
    email = req.body.email;
    password = req.body.password;

    const sqlLoginCheck = "SELECT * from restaurant_login WHERE email = ? AND password = ?";
    db.query(sqlLoginCheck, [email, password], (err, result)=> {
        // console.log("RESULT = ");
        // console.log(result);
        if(err){ 
            res.send({err: err});
        } else {
            if(result.length > 0) {
                console.log("Restaurant found!");
                res.send(result);
            } else {
                console.log("Restaurant not found!");
                res.send({message: "Incorrect username / password!"})
            }
        }
    });
});

app.listen(8000, () => {
    console.log("App listening on port 8000");
});