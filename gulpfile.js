'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

gulp.task( 'mocha', function() {
  gulp.src( './tests/*.js', { read : false })
  .pipe(
    mocha({ reporter: 'list' })
  );
});

gulp.task( 'test', function( cb ) {
  gulp.src( [ './tests/**/*.js', './index.js' ])
    .pipe( istanbul() )
    .on( 'finish', function() {
      gulp.src([ './tests/**/*.js', './index.js' ])
      .pipe( mocha() )
      .pipe( istanbul.writeReports() )
      .on( 'end', cb );
    });
});

gulp.task( 'default', function() {
  gulp.watch( './tests/**/*.js', [ 'test' ]);
});