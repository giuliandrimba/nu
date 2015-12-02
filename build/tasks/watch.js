var gulp = require("gulp");
var config = require("../config.json");

gulp.task('watch', ["build", "serve"], function() {
  gulp.watch(config.sprites.src, ['sprites']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch([config.styles.path + '/**/*.styl'], ['styles']);
  gulp.watch([config.browserify.path + '/**/*.coffee', config.browserify.path + '/**/*.jade', config.browserify.path + '/**/*.js', config.browserify.path + '/**/*.html'], ['browserify']);
});
