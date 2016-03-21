var gulp = require('gulp')
var server = require("./server");
var changed = require('gulp-changed')
var config = require("../config.json");

gulp.task('fonts', function () {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(server.refresh());
})
