var express = require('express');

var app = express();

app.get('/:param1', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello ' + req.params.param1 + '!! Have fun!!');
});

app.listen(8080);