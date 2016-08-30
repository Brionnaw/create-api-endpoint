"use strict";
var express = require('express');
var app = express();
app.get('/:id', (function (req, res, next) {
    if (req.params) {
        console.log('success');
    }
    else {
        next();
    }
}, function (req, res) {
    res.send('error, please include an id');
}));
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server is running on PORT:" + port);
});
