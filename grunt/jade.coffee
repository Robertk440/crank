module.exports=

	views:
		files:
			[
				cwd:'source/markup'
				dest:'www'
				ext:'.html'
				expand:true
				src:['**/**/**/**/*.jade']
			]
		options:
			basedir:'source/markup'
			pretty:true
