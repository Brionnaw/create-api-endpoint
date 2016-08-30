"use strict";
var express = require('express');
var router = express.Router();
router.get('/fantasy', (function (re, res) {
    res.send('Star Wars');
}));
router.get('/action', (function (req, res) {
    res.send('Fast n Furious');
}));
module.exports = router;
