const request = require("request");
const jwt = require("jsonwebtoken");

exports.getJobDetail = (req, res) => {
    let url = "http://dev3.dansmultipro.co.id/api/recruitment/positions";

    if(!req.headers.authorization) {
        return res.status(401).send({
            "message": "Unauthorized access",
        });
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, "SecretKey123", function(err, decoded) {
        if(err === null) {
            request.get({
                url: encodeURI(`${url}/${req.params.id}`),
            }, function(error, response, body) {
                if(error == null) {
                    console.log(encodeURI(`${url}/${req.params.id}`));
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