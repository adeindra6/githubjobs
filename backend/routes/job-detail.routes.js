module.exports = (app) => {
    const job_detail = require("../controllers/job-detail.controller.js");

    const router = require("express").Router();

    router.get("/:id", job_detail.getJobDetail);

    app.use("/api/job-detail", router);
};