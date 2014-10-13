var gulp = require('gulp'),
    del = require('del'),
    notify = require('gulp-notify');

gulp.task('clean', [], function() {
    del('app/build/index.html');
    notify('Clean completed');
});

gulp.task('index', [], function() {
    gulp.src('app/src/index.html')
      .pipe(gulp.dest('app/build/'))
      .pipe(notify('Index file updated'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('index');
});