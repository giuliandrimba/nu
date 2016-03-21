var gulp = require("gulp");
var es = require('event-stream');
var error = require('./util/error');
var log = require('./util/log');
var plumber = require('gulp-plumber')
var spritesmith = require('gulp.spritesmith');
var svgSprite = require('gulp-svg-sprite');
var server = require("./server");
var config = require("../config.json");
var debug = require('gulp-debug');
var changed = require('gulp-changed');
var path = require("path");
var del = require("del");

var spritesheetPath = "shared/spritesheet"

gulp.task('sprites',['move:spriteimage'], function () {
 return del([config.sprites.svg.dest + "/" + spritesheetPath + "/images"], {force:true})
});

gulp.task('move:spriteimage', ['generate:sprites'], function () {
  return gulp.src([config.sprites.svg.dest + "/" + spritesheetPath + "/images/*.svg"])
    .pipe(debug())
    .pipe(gulp.dest(path.resolve(config.images.dest)));
})

gulp.task('generate:sprites', function () {

  log.start()

  var PNGSprite = generatePNGSprite();
  var SVGSprite = generateSVGSprite();

  log.end()

  return es.concat(PNGSprite,SVGSprite);
})

function generatePNGSprite() {
  var PNGSprite = gulp.src(config.sprites.src).pipe(spritesmith({
    imgName: config.sprites.img_name,
    cssName: config.sprites.css_name,
    padding:2
  }));
  PNGSprite.img.pipe(gulp.dest(config.sprites.img_dest));
  PNGSprite.css.pipe(gulp.dest(config.sprites.css_dest)).pipe(server.refresh());

  return PNGSprite;
}

function generateSVGSprite() {

  var SVGSprite = gulp.src(config.sprites.svg.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(svgSprite( {
      mode:{
        view:{
          dest: spritesheetPath,
          sprite: "./images/sprite",
          render: {
            styl:true
          }
        },
      }
    }))
    .on('error', error)
    .pipe(gulp.dest(config.sprites.svg.dest))

  return SVGSprite;
}
