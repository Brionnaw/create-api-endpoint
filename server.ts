import express = require('express');
let app = express();
// chaining routes - condensing the route path into one line of code, changing the route methodss.//

  app.route('/movies')
    .get((req, res) => {
    res.send('GET a movie');
  })
    .post((req, res) => {
    res.send('POST a movie');
  })
    .put((req, res) => {
    res.send('PUT a movie');
  })
    .delete((req, res) => {
    res.send('DELETE a movie');
  });

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is running on PORT:${port}`);
});
