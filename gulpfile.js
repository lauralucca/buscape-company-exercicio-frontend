'use strict';

//dependencias
let gulp = require('gulp');
let sass = require('gulp-sass');

let sassFiles = 'sass/*.scss';
let stylesFolder = 'styles'

//tarefa que transforma sass em css (compilar)
gulp.task('sass', function() {
	console.log('compilando estilos LAURA');
	return gulp
		.src(sassFiles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(stylesFolder));
});

//recompila sass a cada mudanca
gulp.task('watch-sass', function() {
	console.log('observando alteracoes nos estilos...');
	return gulp
		.watch(sassFiles, ['sass']);
});

//roda o gulp
gulp.task('default', ['sass', 'watch-sass']);
