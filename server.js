"use strict";
var express = require('express');
var app = express();
app.post('/movies/', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server is running on PORT:" + port);
});
