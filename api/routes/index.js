const express = require("express");
var https = require('https');
const routes = new express.Router();

routes.get("/restaurants/bypostcode/:code", function (req, res) {
    var request = https.request({
        host: 'uk.api.just-eat.io',
        path: `/restaurants/bypostcode/${req.params.code}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (response) {
        var data = '';
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            let obj = JSON.parse(data);
            res.json(obj)
        });
    });
    request.end();
});


module.exports = routes;