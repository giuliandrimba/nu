var gulp = require("gulp");
var express = require('express');
var tinyLR = require('tiny-lr');
var livereload = require('connect-livereload');
var refresh = require('gulp-livereload');
var fs = require("fs");
var path = require("path");

var server = express();
var lrserver = tinyLR();

// config
var livereloadport = 35729;
var serverport = 8000;
var root = "../public";
var index = path.join(root, 'index.html');

exports.lrserver = require('tiny-lr')();
exports.server = server;

exports.refresh = function() {
  return refresh(lrserver)
};

server.use(livereload({
  port: livereloadport
}));

server.use(express.static(root));  
server.use(function(req, res) {
  if (~(req.url.indexOf('.'))) {
    res.statusCode = 404;
    res.end('File not found: ' + req.url);
  } else {
    res.end(fs.readFileSync(index, 'utf-8'));
  }

});  

gulp.task('serve', function() {
  //Set up your static fileserver, which serves files in the build dir
  server.listen(serverport);
 
  //Set up your livereload server
  lrserver.listen(livereloadport);
  console.log("Server listening at http://localhost:8000");
});