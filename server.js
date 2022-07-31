var express = require('express');
var app = express();
const cors = require('cors');

app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('back-end up and ready');
 })

app.use(cors({
    origin: 'http://localhost:3000'
}));

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
