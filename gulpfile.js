const gulp = require('gulp') //importar o próprio gulp
const sass = require('gulp-sass')(require('sass')) //pacote para integrar o sass no gulp
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*js') 
        .pipe(uglify()) //vai fazer o mesmo que fez com o sass, comprimir o javascript
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/*.scss') 
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //fará com que o arquivo css final fiquei de uma maneira compilada
        })) //pipe para encadear as funções
        .pipe(sourcemaps.write('./maps')) //pasta de mapeamento. mapeamento é feito para que o html ao ser executado no navegador aponte para o código corretameente
        .pipe(gulp.dest('./build/styles'))
}

exports.default = function(){
    gulp.watch('./source/styles/*scss', {ignoreInitial:false} ,gulp.series(compilaSass));
    gulp.watch('./source/scripts/*js', {ignoreInitial:false} ,gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial:false} ,gulp.series(comprimeImagens));
    //guld.watch(qual arquivo deve ser observado, ignorar o primeiro run que seria o start do watch, executando o compila Sass)
}