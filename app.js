var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var xFrameOptions = require('x-frame-options')

var app = express();

app.use(xFrameOptions())

app.use(express.static(__dirname));

module.exports = app;
