var express = require('express');
var app = express();
var db = require('./config/db');

var UserController = require('./api/controller/User');
app.use('/', UserController);

module.exports = app;