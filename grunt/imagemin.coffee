module.exports=
	images:
		files:[
			cwd:'images/'
			dest:'www/images/'
			expand:true
			src:['**/*.{png,jpg,jpeg}']
		]
