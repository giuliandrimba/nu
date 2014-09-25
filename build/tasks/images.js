var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");

gulp.task('images', function() {
  return gulp.src('../public/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('../public/img'));
});