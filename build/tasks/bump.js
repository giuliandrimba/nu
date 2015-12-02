var gulp = require('gulp');
var bump = require('gulp-bump');

gulp.task('bump', function(){
  gulp.src('../package.json')
  .pipe(bump())
  .pipe(gulp.dest('../'));
});
