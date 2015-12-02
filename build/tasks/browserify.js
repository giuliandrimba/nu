var gulp = require('gulp');
var browserify = require('browserify')
var argv = require("yargs").argv;
var gStreamify = require("gulp-streamify");
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var server = require("./server");
var config = require("../config.json");
var jadeify = require("jadeify");
var stringify = require("stringify");

var env = argv.env != "production";

gulp.task('browserify', function() {

  var b = browserify({
    cache: {},
    packageCache: {},
    entries: config.browserify.boot,
    debug: env,
    extensions: ['.coffee', '.jade', '.html']
  })
  .transform("coffeeify")
  .transform("babelify", {presets: ["es2015"]})
  .transform(jadeify)
  .transform(stringify(['.html']));

  function bundle() {
    b.bundle()
    .on('error', gutil.log)
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe(argv.env != "production" ? gutil.noop() : gStreamify(uglify()))
    .pipe(gulp.dest(config.output.path))
    .pipe(server.refresh());
  }

  return bundle()
});
