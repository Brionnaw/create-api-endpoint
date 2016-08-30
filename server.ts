import express = require('express');
let app = express();
 import movies = require('./movies');
 app.use('/movies', movies);




let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is running on PORT:${port}`);
});
