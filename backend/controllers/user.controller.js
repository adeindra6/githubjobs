const jwt = require("jsonwebtoken");
const cryptojs = require("crypto-js");
const db = require("../models/index.js");
const { QueryTypes } = require("sequelize");

exports.login = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            "message": "No data being sent!",
        });
    }

    let hashed_password = cryptojs.MD5(req.body.password).toString();
    const user = {
        username: req.body.username,
        password: hashed_password,
    };

    const user_login = await db.sequelize.query("SELECT * FROM Users WHERE username = ? AND password = ?",
    {
        replacements: [user.username, user.password],
        type: QueryTypes.SELECT,
    });

    if(user_login.length > 0) {
        const token = jwt.sign({
            "username": user_login[0].username,
        }, "SecretKey123", {
            "expiresIn": "1d",
            "algorithm": "HS512",
        });

        let date = new Date();
        let expire = new Date(date.getTime() + (1 * 24 * 60 * 60 * 1000)).toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
        });

        res.send({
            "code": 200,
            "status": "SUCCESS",
            "expire": expire,
            "token": token,
        });
    }
    else {
        res.status(404).send({
            "code": 404,
            "status": "USER NOT FOUND",
            "message": "Wrong Username or Password",
        });
    }
};