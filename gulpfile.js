const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks-html');
const rename = require('gulp-rename');

gulp.task('nunjucks', function() {
    return gulp.src([
      'app/views/**/*.njk',
      '!app/views/includes/*.njk',
    ])
    .pipe(nunjucks({
      searchPaths: ['app/views']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('public'));
});
