"use strict";
var express = require('express');
var router = express.Router();
router.get('/fantasy', (function (req, res) {
    res.send('The Final Fantasy');
}));
router.get('/fantasy/new', (function (req, res) {
    res.send('Star Trek');
}));
module.exports = router;
