var gulp = require('gulp');
var newer = require('gulp-newer');
  const sass = require('gulp-sass')(require('sass'));

var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss']
};
var cssdest = "./www/css/";
var cssSrc = "./scss/*.scss";


//gulp.task('watch', function() {

//});


gulp.task('sass', function(done) {
  gulp.src(cssSrc)
    .pipe(newer(cssdest))
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(cssdest))
});


gulp.task("serve:before", ["default"]);
gulp.task("default", function(){
gulp.watch(cssSrc,["sass"])
 });
//gulp.task("serve:after", ["watch","default"]);






