module.exports = (app) => {
    const job_list = require("../controllers/job-list.controller.js");

    const router = require("express").Router();

    router.get("/", job_list.getJobList);

    app.use("/api/job-list", router);
};