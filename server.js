var express = require('express');
var app = express();
const cors = require('cors');

const port=process.env.PORT||3002

app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('back-end up and ready');
 })

app.use(cors({
    origin: 'http://localhost:3000'
}));

var server = app.listen(3002, function () {
   var host = server.address().address;
   var port = server.address().port

   console.log(`server listening to port${port}`)
   
   console.log("Example app listening at http://%s:%s", host, port)
})
