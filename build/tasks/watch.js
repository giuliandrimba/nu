var gulp = require("gulp");
var config = require("../config.json");
var watch = require('gulp-watch')

gulp.task('watch', ["build", "serve"], function() {

  watch(config.styles.path + '/**/*.styl', function () {
    gulp.start('styles')
  })

  watch(config.data.src, function () {
    gulp.start('data')
  })

  watch(config.html.src, function () {
    gulp.start('html')
  })

  watch(config.images.src, function () {
    gulp.start('images', 'svg')
  })
  watch(config.sprites.src, function () {
    gulp.start('sprites')
  })
});
