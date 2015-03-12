var gulp = require("gulp");
var concat = require("gulp-concat");
var server = require("./server");

var config = require("../config.json");

gulp.task('scripts', function() {
  return gulp.src(config.scripts.path + '/**/*.js')
    .pipe(concat(config.scripts.output))
    .pipe(gulp.dest(config.output.path + '/' + config.output.scripts))
    .pipe(server.refresh());
});