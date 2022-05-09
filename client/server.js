const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/fastfood-ui'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/fastfood-ui/index.html');
});

app.listen(4200);
