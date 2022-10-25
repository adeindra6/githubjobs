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

require("./routes/user.routes.js")(app);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});