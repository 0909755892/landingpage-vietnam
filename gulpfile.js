'use strict';
// Gọi thư viện sử dụng vào
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var strip = require('gulp-strip-comments');
var cleanCSS = require('gulp-clean-css');

gulp.task('html-min', function () {
  return gulp.src([
      './*.html',
    ])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});
gulp.task('js-min', function () {
  return gulp.src([
    './js/*.js',
  ])
  .pipe(uglify())
  .pipe(strip())
  .pipe(gulp.dest('./js'));
});
gulp.task('css-min', function () {
  return gulp.src([
    './css/*.css',
  ])
  .pipe(cleanCSS({compatibility: 'ie8', level: {1: {specialComments: 0}}}))
  .pipe(gulp.dest('./css'));
});

// Lệnh mặc định của Gulp
gulp.task('default', function () {
  gulp.start([
    'html-min',
    'js-min',
    'css-min',
  ]);
});