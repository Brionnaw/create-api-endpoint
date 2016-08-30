"use strict";
var express = require('express');
var app = express();
app.get('/about', (function (req, res) {
    res.send(' I am a GET request');
}));
app.post('/new', (function (req, res) {
    res.send(' I am a post request');
}));
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server is running on PORT:" + port);
});
