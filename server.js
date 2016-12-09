//run sudo mongod
//run mongo shell
//run node server i.e. nodemon server.js

// Require all dependencies
var express = require('express');
var bodyParser = require('body-parser');
// var logger = require('morgan');

// Create Express App Object
var app = express();

// Mount Middleware \\
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/signup', (req, res) => {
    //res.sendFile('index.html', {root: './public'});
    res.send(' <form method="post" action="/formsubmit"><input name="email" type="email"> <input name="pass" type="password"><input type="submit"></form>')
})
app.post('/formsubmit', (req, res) => {
    res.redirect('/success')
})
app.get('/success', (req, res) => {
    res.send("Success!");
});

// Listening for the PORT and returning a console log
var PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log("There was a problem: ", err);
    } else {
        console.log("Server is running on port: ", PORT);
    }
});
