module.exports=
	views:
		files:
			[
				cwd:'markup'
				dest:'www'
				ext:'.html'
				expand:true
				src:['**/**/**/**/*.jade']
			]
		options:
			basedir:'markup'
			pretty:true
