var gulp = require("gulp");
var del = require("del");

var config = require("../config.json")

gulp.task('clean', function(cb) {
    del([config.output.path + "/" + config.output.styles, config.output.path + "/" + config.output.scripts, config.output.path + "/images"], {force:true}, cb)
});
