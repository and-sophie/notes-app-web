const express = require('express');
const fs = require('fs');

const app = express();

app.get('/bundle.js', function (req, res) {
  fs.readFile(__dirname + '/build/bundle.js', 'utf8', function (err, data) {
    res.send(data);
  });
});

app.use('/', express.static(__dirname + '/build/'));

app.use('/*', express.static(__dirname + '/build/index.html'));

app.listen(8080, function (error) {
  if (error) throw (error);
  console.info('Server started on 8080 💫  💥');
})
