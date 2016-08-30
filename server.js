"use strict";
var express = require('express');
var app = express();
var movies = require('./movies');
app.use('/movies', movies);
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server is running on PORT:" + port);
});
