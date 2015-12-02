var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var gulpFilter = require('gulp-filter');
var debug = require('gulp-debug');
var config = require("../config.json");

gulp.task('images', function() {

  var filter = gulpFilter(['*', '**/*', '!icons']);

  return gulp.src([config.images.src])
    .pipe(filter)
    .pipe(debug())
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.images.dest));
});
