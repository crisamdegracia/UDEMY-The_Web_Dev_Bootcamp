
//======================================
// SETUP ===============================
//=======================================
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    bodyParser = require('body-parser')

app.set('view engine','ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true } ));

//===================================
//DATABASE STUFF ====================
//==================================


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/dog_demo_app');

var dogSchema = new  mongoose.schema ({
    name: String,
    breed: String

})
