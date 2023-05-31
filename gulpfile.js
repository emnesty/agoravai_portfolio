const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoPrefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const { src } = require("gulp");

// Complica o SASS, adicionando autoprefixer e dando refresh na página
function compilaSass() {
  return  gulp.src('./scss/**/*.scss')
    .pipe(sass({ outputStyle: "compressed"}))
    .pipe(autoPrefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.stream());
}

//Task do SASS
gulp.task("sass", compilaSass);

function pluginsCSS() {
  return gulp.src('./css/lib/*.css')
  .pipe(concat('plugins.css'))
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.stream())
}

gulp.task('pluginscss', pluginsCSS)

//Função para adicionar o gulp-concat e o babel para versões antigas do JS
function gulpJs() {
  return gulp.src('./js/scripts/*.js')
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['@babel/env']
}))
.pipe(uglify())
  .pipe(gulp.dest('./js/'))
  .pipe(browserSync.stream());
}

//Tarefa para concatenar o JS
gulp.task('alljs', gulpJs)

//Função para configurar todas as libs JS
function pluginsJS() {
  return gulp
  .src(['./js/lib/aos.min.js','./js/lib/swiper.min.js'])
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream())
}

//Tarefa para iniciar o pluginsjs
gulp.task('pluginjs', pluginsJS)


//Função do browsersync
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
}

//Tarefa do browsersync
gulp.task('browser-sync', browser);


//Função do Watch para alteração em SASS e HTML
function watch() {
  gulp.watch('./scss/**/*.scss', compilaSass);
  gulp.watch('./css/lib/*.css', pluginsCSS)
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('./js/scripts/*.js', gulpJs)
  gulp.watch('./js/lib/*.js', pluginsJS)
}


//Tarefa do Watch
gulp.task('watch', watch)


//Nossas tarefas defaults que executam o watch, browsersync, arquivos js e SASS
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'alljs', 'sass', 'pluginscss', 'pluginjs'));
