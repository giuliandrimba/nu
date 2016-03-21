var gulp = require("gulp");
var prettyData = require('gulp-pretty-data')
var config = require("../config.json");

gulp.task('data',function () {
  return gulp.src(config.data.src)
  .pipe(prettyData({type: 'minify', preserveComments: false}))
  .pipe(gulp.dest(config.data.dest))
})
