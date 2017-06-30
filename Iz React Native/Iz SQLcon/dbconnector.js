var express = require ('express');
var path = require ('path')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./dbconnector/index');
var users = require('./dbconnector/users');

var dbconnector = express();

dbconnector.set('views', path.join(__dirname, 'views'));
dbconnector.set('view engine', 'jade');

dbconnector.use(logger('dev'));
dbconnector.use(bodyParser.json());
dbconnector.use(bodyParser.urlencoded({ extended: false }));
dbconnector.use(cookieParser());
dbconnector.use(express.static(path.join(__dirname, 'public')));

dbconnector.use('/', index);
dbconnector.use('/users', users);

dbconnector.use(function(req, res, next) {
  var err = new Error ('Not Found');
  err.status = 404;
  next(err);
});

dbconnector.use(function(err, req, res, next){
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') ==== 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module exports = dbconnector;
