var gulp = require("gulp");
var gutil = require('gulp-util');
var stylus = require("gulp-stylus");
var argv = require("yargs").argv;
var server = require("./server");
var config = require("../config.json");
var sourcemaps = require('gulp-sourcemaps');
var nib = require('nib');
var plumber = require('gulp-plumber');

var env = argv.env != "production";

gulp.task('styles', function () {
  return gulp.src(config.styles.boot)
    .pipe(plumber())
    .pipe(env != "production" ? gutil.noop() : sourcemaps.init())
    .pipe(stylus({
      use: [nib()],
      compress: !env,
      linenos: env
    }))
    .pipe(env != "production" ? gutil.noop() : sourcemaps.write())
    .pipe(gulp.dest(config.output.path))
    .pipe(server.refresh());
});
