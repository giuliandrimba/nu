var gulp = require('gulp')
var changed = require('gulp-changed')
var config = require('../config.json')

gulp.task('video', function () {
  return gulp.src(config.video.src)
    .pipe(changed(config.video.dest))
    .pipe(gulp.dest(config.video.dest))
})
