const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Gives ability to simply create routes ^

//manually configuring MongoDB connection because it works best

mongoose.connect('mongodb://127.0.0.1:27018/', 
    { useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB databse connection established successfuly");
});

//ROUTE IMPORTS
const postsRoute = require('./routes/posts.js');

app.use('/posts', postsRoute);

//ROUTES

app.get('/', (req, res) => {
    res.send('We are on root');
});

//MongoDB listening on port 27018

app.listen(5000);