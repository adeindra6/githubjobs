module.exports = (app) => {
    const user = require("../controllers/user.controller.js");

    const router = require("express").Router();

    router.post("/", user.login);

    app.use("/api/login", router);
};