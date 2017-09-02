const gulp = require('gulp');
const sass = require('gulp-sass');

//Complie Sass & inject Into Browser
gulp.task('sass',function(){
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
		.pipe(sass())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('src/css'))
});

//Move js files to src/js

gulp.task('js', function(){
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
		.pipe(gulp.dest('src/js'))
});


//Move fonts to src

gulp.task('fonts',function(){
	return gulp.src('node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest('src/fonts'))
});

//Move font awesome css to src/css

gulp.task('fa',function(){
	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
		.pipe(gulp.dest('src/css'))
});

gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass'])

gulp.task('default',['js','fa','fonts']);



