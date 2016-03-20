var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConf = require('./webpack.config.js');

var assetsDir = 'assets/',
    vendorJs = 'vendor.js';

gulp.task('bowerJs', function() {
  return gulp.src('')
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest(assetsDir));
});
 
gulp.task('default', ['bowerJs']);
