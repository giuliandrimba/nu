var browserify   = require('browserify');
var jadefy   = require('jadeify');
var watchify     = require('watchify');
var bundleLogger = require('./util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('./util/handleErrors');
var source       = require('vinyl-source-stream');
var stylus       = require("gulp-stylus");
var argv         = require("yargs");
var del          = require("del");
var concat       = require("gulp-concat");
var uglify       = require("gulp-uglify");
var gutil        = require('gulp-util');
var gStreamify   = require("gulp-streamify");

var env = argv.env != "production";

gulp.task('clean', function(cb) {
    del(['../public/styles', '../public/scripts'], {force:true}, cb)
});

gulp.task('browserify', function() {
  var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Specify the entry point of your app
    entries: ["../src/app/app.coffee"],
    // Add file extentions to make optional in your requires
    extensions: ['.coffee', '.jade'],
    // Enable source maps!
    debug: !env
  });

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('app.js'))
      // Specify the output destination
      .pipe(argv.env != "production" ? gutil.noop() : gStreamify(uglify()))
      .pipe(gulp.dest('../public/scripts'))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});

gulp.task('scripts', function() {
  return gulp.src('src/vendors/scripts/**/*.js')
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('../public/scripts'))
});

gulp.task('styles', function() {
  return gulp.src('../src/app/styles/app.styl')
    .pipe(stylus({
      compress: env,
      sourcemap: {
        inline: env,
        sourceRoot: '..',
        basePath: '../src/app/styles'
      }
    }))
    .pipe(gulp.dest('../public/styles'))
});

gulp.task('watch', function() {

  gulp.watch('../src/app/styles/**/*.styl', ['styles']);
  gulp.watch('../src/app/styles/**/*.css', ['styles']);
  gulp.watch('../src/app/**/*.coffee', ['browserify']);
  gulp.watch('src/vendors/scripts/**/*.js', ['scripts']);

});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'browserify');
});