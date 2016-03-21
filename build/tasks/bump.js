var gulp = require('gulp');
var bump = require('gulp-bump');
var gutil = require('gulp-util');
var argv = require("yargs").argv;

gulp.task('bump', function(){

  var type = "patch";

  if(argv.patch)
    type = "patch"

  if(argv.major)
    type = "major"

  if(argv.minor)
    type = "minor"

  return gulp.src('./package.json')
  .pipe(argv.watch ? gutil.noop() : bump({type:type}))
  .pipe(gulp.dest('./'));
});
