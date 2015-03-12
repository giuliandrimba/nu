var gulp = require("gulp");
var spritesmith = require('gulp.spritesmith');
var server = require("./server");
var config = require("../config.json");

gulp.task('sprite', function () {
  var spriteData = gulp.src(config.sprites.src).pipe(spritesmith({
    imgName: config.styles.img_name,
    cssName: config.styles.css_name
  }));
  spriteData.img.pipe(gulp.dest(config.styles.img_dest));
  spriteData.css.pipe(gulp.dest(config.styles.css_dest)).pipe(server.refresh());
});
