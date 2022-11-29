const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      del = require('del'),
      browserSync = require('browser-sync').create(),
      sourcemaps = require('gulp-sourcemaps'),
      gulpif = require('gulp-if'),
      gcmq = require('gulp-group-css-media-queries'),
      imagemin = require('gulp-imagemin'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      jade = require('gulp-jade'),
      less = require('gulp-less'),
      smartgrid = require('smart-grid');

const isDev = process.argv.indexOf('--dev') !== -1,
      isProd = !isDev,
      isSync = process.argv.indexOf('--sync') !== -1;

const base = './develop/',
      src = './develop/assets/',
      prod = './build/',
      dist = './build/assets/';

let gridOptions = {
   columns: 24,
   offset: "30px",
   // mobileFirst: true,
   container: {
      maxWidth: "1440px",
      fields: "50px" // fields не меньше offset делённого на 2
   },
   breakPoints: {
      xxl: {
         width: "1240px"
      },
      xl: {
         width: "1150px"
      },
      lg: {
         width: "995px",
         fields: "30px",
         offset: "20px"
      },
      md: {
         width: "770px"
      },
      sm: {
         width: "580px"
      },
      xs: {
         width: "470px",
         fields: "20px",
         offset: "10px"
      },
      xxs: {
         width: "360px"
      }
   }
};

function html(done){
   return gulp.src( base + '*.jade' )
   .pipe(jade())
   .pipe(gulp.dest( prod ))
   .pipe(gulpif(isSync, browserSync.stream()));
   done();
}

function styles(){
   return gulp.src( [ src + 'css/style.less' ])
   .pipe(gulpif(isDev, sourcemaps.init()))
   .pipe(less())
   .pipe(gcmq())
   .pipe(autoprefixer())
   .pipe(gulpif(isProd, cleanCSS({
      level: 2
   })))
   .pipe(gulpif(isDev, sourcemaps.write() ))
   .pipe(gulp.dest( dist + 'css'))
   .pipe(gulpif(isSync, browserSync.stream()))
}
// function ie7(done) {
//    return gulp.src( src + 'css/fontello-ie7.css' )
//    .pipe(gulp.dest( dist + 'css/' ));
//    done();
// }

function images(done){
   return gulp.src( src + 'images/**/*')
   .pipe(gulpif(isProd, imagemin()))
   .pipe(gulp.dest( dist + 'images'));
   done();
}
function data(done){
   return gulp.src([src + 'data/*', src + 'data/**/*'])
   .pipe(gulp.dest( dist + 'data'));
   done();
}
function js(done){
   return gulp.src(src + 'js/*')
   .pipe(gulpif(isProd, uglify()))
   .pipe(gulp.dest( dist + 'js'));
   done();
}

function clear(){
   return del( prod + '*');
}
/*
function copyFonts(done) {
   return gulp.src( src + 'fonts/!**!/!*' )
   .pipe(gulp.dest( dist + 'fonts/' ));
   done();
}*/

function watch(done){
   if(isSync){
      browserSync.init({
         server: {
            baseDir: './build/'
         }
      });
   }
   
   gulp.watch( src + 'css/**/*.less', styles);
   gulp.watch( base + '*.jade', html);
   gulp.watch( src + 'jade/**/*.jade', html);
   gulp.watch( src + 'images/**/*', images);
   gulp.watch( src + 'data/*', data);
   gulp.watch( src + 'data/**/*', data);
   gulp.watch( src + 'data/**/*', data);
   gulp.watch( src + 'js/*', js);
   done();
}

function grid(done){
   smartgrid( src + 'css/base', gridOptions);
   done();
}

const build = gulp.series(clear,
   gulp.parallel(html, styles, js, images, data )
);

gulp.task('build', build);
gulp.task('watch', gulp.series(build, watch));
gulp.task('grid', gulp.parallel(grid));
gulp.task('grid', gulp.parallel(grid));
gulp.task('js', js);
gulp.task('data', data);
// gulp.task('ie', ie7);
