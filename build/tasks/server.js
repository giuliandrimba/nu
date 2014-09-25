var gulp = require("gulp");
var express = require('express');
var tinyLR = require('tiny-lr');
var livereload = require('connect-livereload');
var refresh = require('gulp-livereload');

var server = express();
var lrserver = tinyLR();

// config
var livereloadport = 35729;
var serverport = 8000;
var root = "../public";

exports.lrserver = require('tiny-lr')();
exports.server = server;

exports.refresh = function() {
  return refresh(lrserver)
};

server.use(livereload({
  port: livereloadport
}));

server.use(express.static(root));  

gulp.task('serve', function() {
  //Set up your static fileserver, which serves files in the build dir
  server.listen(serverport);
 
  //Set up your livereload server
  lrserver.listen(livereloadport);
  console.log("Server listening at http://localhost:8000");
});