var gulp = require('gulp')
var changed = require('gulp-changed')
var config = require('../config.json')

gulp.task('audio', function () {
  return gulp.src(config.audio.src)
    .pipe(changed(config.audio.dest))
    .pipe(gulp.dest(config.audio.dest))
})
