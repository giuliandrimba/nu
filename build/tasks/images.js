var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var gulpFilter = require('gulp-filter');

gulp.task('images', function() {

  var filter = gulpFilter(['*', '!icons']);

  return gulp.src('../src/images/**/*')
    .pipe(filter)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('../public/images'));
});

