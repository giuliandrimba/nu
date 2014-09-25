var gulp = require("gulp");
var stylus = require("gulp-stylus");
var argv = require("yargs").argv;

var server = require("./server");
var config = require("../config.json");

var env = argv.env != "production";

gulp.task('styles', function() {
  return gulp.src(config.styles.boot)
    .pipe(stylus({
      compress: !env,
      sourcemap: {
        inline: env,
        sourceRoot: '../src',
        basePath: config.styles.path
      }
    }))
    .pipe(gulp.dest(config.output.path + '/' + config.output.styles))
    .pipe(server.refresh());
});