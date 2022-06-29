const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/notes-db-app')
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.error(err));

/*
var MongoClient = require('mongodb').MongoClient;
var dburl
*/