import express = require('express');
let app = express();
// route handler: handling functions within your route,  //
  app.get('/:id', ((req, res, next) =>{ //next tells the function to go to the part of the process //
    if(req.params){
    console.log('success');
  } else {
    next();
    }
  }, function(req, res) {

    res.send('error, please include an id');
  }));

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is running on PORT:${port}`);
});
