var gulp = require('gulp');
var sass = require('gulp-sass');
var theo = require('gulp-theo');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('_sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch',['browserSync','choices:scss','decisions:scss', 'sass'], function(){
   gulp.watch('_sass/**/*.scss', ['sass']);  
   gulp.watch('*.yml',['choices:scss','decisions:scss']);
   gulp.watch('*.html', browserSync.reload); 
   gulp.watch('js/**/*.js', browserSync.reload); 
 })

 gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'fanniemae-designsystem'
    },
  })
})

gulp.task('choices:scss', () =>
  gulp.src('_choices.yml')
    .pipe(theo.plugin({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('_sass'))
)

gulp.task('decisions:scss', () =>
  gulp.src('_decisions.yml')
    .pipe(theo.plugin({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('_sass'))
)