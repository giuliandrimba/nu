var gulp = require("gulp");
var del = require("del");
var cache = require("gulp-cache");
var path = require("path");

var config = require("../config.json")

gulp.task('clean', function(cb) {
  var styles = path.resolve(config.output.path + "/" + config.output.styles)
  var scripts = path.resolve(config.output.path + "/" + config.output.scripts)
  var images = path.resolve(config.output.path + "/images");
  var data = path.resolve(config.data.dest);
  var audio = path.resolve(config.audio.dest);
  return del([styles, scripts, images, data, audio], {force:true}, cb)
});
