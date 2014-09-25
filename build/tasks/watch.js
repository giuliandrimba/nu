var gulp = require("gulp");
var config = require("../config.json");

gulp.task('watch', ["serve"], function() {

  gulp.watch(config.styles.path + '/**/*.styl', ['styles']);
  gulp.watch(config.styles.path + '/**/*.css', ['styles']);
  gulp.watch(config.browserify.path + '/**/*.coffee', ['browserify']);
  gulp.watch(config.scripts.path + '/**/*.js', ['scripts']);

});