/**
 * Created by LikoLu on 2016/4/20.
 */
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var sass = require('gulp-sass');

gulp.task('html',function(){
    return gulp.src('./src/*.html')
        .pipe(livereload())
});

gulp.task('sass' ,function () {
    return gulp.src('./src/css/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});
gulp.task('sass:watch' ,function () {
    livereload.listen();
    gulp.watch('./src/css/index.scss',['sass']);
});
gulp.task('webpack',function(){
    gulp.src('./src/js/index.js').pipe(webpack(require('./webpack.config.js'))).pipe(livereload());
});
gulp.task('live',function(){
    livereload.listen();
    gulp.watch(['./src/js/**/*.js'],['webpack']);
});

