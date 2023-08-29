const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

// Establish a database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudnode",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM contact_db";
    connection.query(sqlGet, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
})

app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO contact_db (name, email, contact) VALUES ('Sailesh','sailesh@gmail.com',9813065077)";
//   connection.query(sqlInsert, (error, result) => {
//     console.log("error", error);
//     console.log("result", result);
//     res.send("Hello Express!");
//   });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
