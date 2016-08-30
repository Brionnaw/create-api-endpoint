"use strict";
var express = require('express');
var app = express();
app.route('/movies')
    .get(function (req, res) {
    res.send('GET a movie');
})
    .post(function (req, res) {
    res.send('POST a movie');
})
    .put(function (req, res) {
    res.send('PUT a movie');
})
    .delete(function (req, res) {
    res.send('DELETE a movie');
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server is running on PORT:" + port);
});
