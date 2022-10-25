const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request, response) => {
    response.json({message: "Welcome to Github Jobs Backend API"});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});