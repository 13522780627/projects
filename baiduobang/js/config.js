({
	appDir: '../js',
	baseUrl: './project',
	dir: './dist',
	modules: [
		{
			name: 'index'
		}
	],
	fileExclusionRegExp:/^(r|config)\.js$/,
	optimizeCss:'standard',
	remoceCombined: true,
	paths:{
		jquery: 'libs/jquery-2.1.1.min',
		slider: 'libs/jiao',
		index: 'index'
	},
	shim:{
		index: {
			deps:  [
				'jquery'
			]
		}
	}
})
/*({
	appDir:"../js",
	baseUrl:"./project",
	dir:"./dist",
	modules:[
		{
			name:"index"
		}
	],
	fileExclusionRegExp:/^(r|config)\.js$/,
	optimizeCss:"standard",
	remoceCombined :true,
	paths:{
		jquery:"libs/jquery-2.1.1.min",
		slider:"libs/jiao",
		index :"index"
	},
	shim:{
		index:{
			deps:["jquery"]
		}
	}
})*/