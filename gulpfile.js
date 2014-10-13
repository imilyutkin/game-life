var gulp = require('gulp'),
    del = require('del'),
    notify = require('gulp-notify');

gulp.task('clean', [], function() {
    del('app/build/index.html');
});

gulp.task('index', [], function() {
    gulp.src('app/src/index.html')
      .pipe(gulp.dest('app/build/'))
      .pipe(notify('Index file updated'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('copylibs');
    gulp.start('index');
});

gulp.task('copylibs', [], function() {
    gulp.src('bower_components/angularjs/angular.min.js')
      .pipe(gulp.dest('app/build/components/angular'));
    gulp.src('bower_components/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('app/build/components/jquery'));
    gulp.src('bower_components/pure/pure-min.css')
      .pipe(gulp.dest('app/build/components/pure'));
});

gulp.task('watch', function() {
    gulp.watch("app/src/index.html", ['index']);
});