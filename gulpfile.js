var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
})fy = require('gulp-uglify');

gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


