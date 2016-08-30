import express = require('express');
  //express router - allow to have several different routes //
    let router = express.Router();
      router.get('/fantasy' , ((re, res) => {
        res.send('Star Wars');
      }))
      router.get('/action', ((req, res)=> {
        res.send('Fast n Furious');
      }))
        export = router;
