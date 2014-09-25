var gulp = require("gulp");

var server = require("./tasks/server");
var clean = require("./tasks/clean");
var browserify = require("./tasks/browserify");
var scripts = require("./tasks/scripts");
var styles = require("./tasks/styles");
var watch = require("./tasks/watch");

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'browserify');
});