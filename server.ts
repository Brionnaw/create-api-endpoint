import express = require('express');
let app = express();

  app.post('/movies/', (req, res) => {
    console.log(req.body);
    res.send(req.body);

  })

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is running on PORT:${port}`);
});
