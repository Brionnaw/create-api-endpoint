import express = require('express');
let app = express();

  app.get('/about',  ((req, res) => {
    res.send(' I am a GET request');
  })) // api endpoint

app.post('/new', ((req, res) => {
  res.send (' I am a post request');
}))

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is running on PORT:${port}`);
});
