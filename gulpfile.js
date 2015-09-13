'use strict';

var gulp = require('gulp');
var buildTypes = require('./scripts/build-types');

gulp.task('build', function() {
  return gulp
    .src(['./src/types.js'])
    .pipe(buildTypes)
    .pipe(gulp.dest('./lib/'));
});

gulp.task('default', ['build']);
