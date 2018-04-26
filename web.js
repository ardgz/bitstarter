const express = require('express');
const fs = require('fs');
const app = express();
 
app.get('/', (req, res) => {
  var html = fs.readFileSync('public/index.html').toString();
  res.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Listening on " + port);
});
