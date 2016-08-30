import express = require('express');
  //express router - allow to have several different routes //
    let router = express.Router();
      router.get('/fantasy' , ((req, res) => {
        res.send('The Final Fantasy');
      }))
      router.get('/fantasy/new', ((req, res)=> {
        res.send('Star Trek');
      }))
        export = router;
// localhost:3000/movies/fantasy/new //
