module.exports=

	application:
		files:['source/browser/*.xml','source/scripts/application/*.js','source/data/**/**/*.json','source/fonts/**']
		tasks:['rsync','notify:watch']

	dependencies:
		files:['source/dependencies/**/**/*.js']
		tasks:['rsync','notify:watch']

	images:
		files:['source/images/**/*.{jpg,png,jpeg}']
		tasks:['rsync','imagemin','notify:watch']

	jade:
		files:['source/markup/**/*.jade']
		options:
			livereload:true
		tasks:['jade','notify:watch']

	scripts:
		files:['source/scripts/**/*.js']
		tasks:['rsync','notify:watch']

	stylesheets:
		files:['www/stylesheets/style.css']
		tasks:['notify:watch']

	www:
		files:['www/stylesheets/**/*.css','www/**/*.html','www/images/**/*','www/scripts/**/*.js']
		options:
			nospawn:true
			livereload:true
