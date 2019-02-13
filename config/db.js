const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cellon', { useNewUrlParser: true });
var db = mongoose.connection;
mongoose.set('useFindAndModify', false);

