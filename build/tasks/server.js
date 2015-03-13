var gulp = require("gulp");
var browser = require('browser-sync');
var reload = browser.reload;

gulp.task('serve', function() {
  browser({
    server: {
      baseDir: "../public"
    }
  });
});

exports.refresh = function() {
  return reload({stream:true})
};
