const request = require("request");
const jwt = require("jsonwebtoken");

exports.getJobList = (req, res) => {
    let url = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
    let and_op = false;

    if(!req.headers.authorization) {
        return res.status(401).send({
            "message": "Unauthorized access",
        });
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, "SecretKey123", function(err, decoded) {
        if(err === null) {
            if(req.query.description != undefined) {
                url = `${url}?description=${req.query.description}`;
                and_op = true;
            }
        
            if(req.query.location != undefined) {
                let op = "?";
                if(and_op) {
                    op = "&";
                }
                url = `${url}${op}location=${req.query.location}`;
                and_op = true;
            }
        
            if(req.query.full_time == "true") {
                let op = "?";
                if(and_op) {
                    op = "&";
                }
                url = `${url}${op}type=Full Time`;
                and_op = true;
            }
        
            if(req.query.page != undefined) {
                let op = "?";
                if(and_op) {
                    op = "&";
                }
                url = `${url}${op}page=${req.query.page}`;
                and_op = true;
            }
        
            request.get({
                url: encodeURI(url),
            }, function(error, response, body) {
                if(error == null) {
                    res.send(JSON.parse(body));
                }
                else {
                    res.status(500).send(error);
                }
            });
        }
        else {
            console.log(err);
            res.status(500).send({
                "message": "Internal Server Error!",
            });
        }
    });
};