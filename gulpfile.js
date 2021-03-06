const gulp = require('gulp'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  autoprefixer = require('gulp-autoprefixer'),
  jade = require('gulp-jade'),
  browserSync = require('browser-sync').create();


gulp.task('sass', () =>
gulp.src('./dev/styles.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream())
);

gulp.task('es6',()=>
gulp.src('./dev/scripts.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./'))
  .on('end', browserSync.reload)
);

gulp.task('jade', () =>
gulp.src('./dev/index.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
  .on('end', browserSync.reload)
);


gulp.task('default', ()=> {
  browserSync.init({
  server: './'
});
gulp.watch('./dev/**/*.scss', ['sass']);
gulp.watch('./dev/*.js', ['es6']);
gulp.watch('./dev/*.jade', ['jade']);
}
);