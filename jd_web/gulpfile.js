/**
 * Created by zc on 2016/9/8.
 */
var gulp=require("gulp");
var html=require("gulp-htmlmin");
var cssmin=require("gulp-clean-css");
var jsmin=require("gulp-uglify");

 gulp.task("html", function () {
 gulp.src("index.html")
 .pipe(html({
 collapseWhitespace: true,
 removeComments: true,
     minifyJS: true
 }))
 .pipe(gulp.dest("jsmin"))
 });

gulp.task("jsmin", function () {
    gulp.src("js/index.js")
        .pipe(jsmin())
        .pipe(gulp.dest("jsmin"))
});
gulp.task("cssmin", function () {
    gulp.src("css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("cssmin"))
});