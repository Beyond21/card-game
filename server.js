var express = require('express');

var app = express();


app.use(express.static('public'));
app.use(express.static('node_modules'));



app.listen(8000, function() {
    console.log("listen to server 8000 ! !")
});