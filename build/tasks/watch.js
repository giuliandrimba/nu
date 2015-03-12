var gulp = require("gulp");
var config = require("../config.json");

gulp.task('watch', ["setWatch", "serve", "build"], function() {

  gulp.watch(config.styles.path + '/**/*.styl', ['styles']);
  // gulp.watch([config.browserify.path + '/**/*.coffee', config.browserify.path + '/**/*.jade'], ['browserify']);
  gulp.watch(config.scripts.path + '/**/*.js', ['scripts']);

});