var gulp=require("gulp"),
	concat=require("gulp-concat"),
	uglify=require("gulp-uglify"),
	minifycss=require("gulp-minify-css");
gulp.task("concat",function(){
	gulp.src(["js/app.js","js/config.js","js/controller.js","js/directive.js"])
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist"))
})
gulp.task("minify",function(){
	gulp.src(['css/style.css'])
		.pipe(minifycss())
		.pipe(gulp.dest("min"))
})
gulp.task("default",['concat','minify'])