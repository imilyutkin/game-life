var gulp = require('gulp'),
    del = require('del'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    typescript = require('gulp-typescript');

gulp.task('clean', [], function() {
    del('app/build/index.html');
    del('app/build/scripts/Application.js');
});

gulp.task('index', [], function() {
    gulp.src('app/src/index.html')
      .pipe(gulp.dest('app/build/'))
      .pipe(notify('Index file updated'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('copylibs');
    gulp.start('index');
    gulp.start('scripts');
});

gulp.task('scripts', [], function() {
    gulp.src(['app/src/scripts/controllers/*.ts', 'app/src/scripts/*.ts', ])
      .pipe(concat('Application.ts'))
      .pipe(typescript())
      .pipe(gulp.dest('app/build/scripts'))
      .pipe(notify('Scripts was updated'));
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
    gulp.watch(['app/src/scripts/controllers/*.ts', 'app/src/scripts/*.ts'], ['scripts']);
});