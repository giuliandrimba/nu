var gulp = require("gulp");

gulp.task('build', ['clean'], function() {
    gulp.start('styles', 'browserify', 'sprites', 'images');
});
