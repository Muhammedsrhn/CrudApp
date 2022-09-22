const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_contact"
});


app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get conatct from database
app.get("/api/get", (req, resp) => {
    const sqlGet = "SELECT * FROM contact_db";
    db.query(sqlGet, (err, res) => {
        resp.send(res);
    });

});

//add contact tp database
app.post("/api/post", (req, resp) => {
    const { id, name, email, contact } = req.body;
    const sqlInsert = `INSERT INTO contact_db (id,name,email,contact) VALUES (?,?,?,?)`;
    db.query(sqlInsert, [id, name, email, contact], (err, res) => {
        resp.send(res);
        console.log(req.body)
    });
});

//remove contact from database
app.delete("/api/remove/:id", (req, resp) => {
    const { id } = req.params;
    const sqlRemove = `DELETE FROM contact_db WHERE id=?`;
    db.query(sqlRemove, [id], (err, res) => {
        resp.send(res);
        console.log(res);
    });
});

app.get("/api/get/:id", (req, resp) => {
    const { id } = req.params;
    const sqlDetail = "SELECT * FROM contact_db WHERE id=?";
    db.query(sqlDetail, id, (err, res) => {
        console.log(err);
        resp.send(res);
    });
});

app.put("/api/update/:id", (req, resp) => {
    const { id } = req.params;
    const { name, email, contact } = req.body;
    const sqlUpdate = "UPDATE contact_db SET name=?,email=?,contact=? WHERE id=?";
    db.query(sqlUpdate, [name, email, contact, id], (err, res) => {
        console.log(err);
        resp.send(res);
    })
});




app.listen(5000, () => {
    console.log("Service Running");
});
