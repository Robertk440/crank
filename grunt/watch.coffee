module.exports=

	application:
		files:['browser/*.xml','scripts/application/*.js','data/**/**/*.json','fonts/**']
		tasks:['rsync','notify:watch']

	dependencies:
		files:['dependencies/**/**/*.js']
		tasks:['rsync','notify:watch']

	images:
		files:['images/**/*.{jpg,png,jpeg}']
		tasks:['rsync','imagemin','notify:watch']

	jade:
		files:['components/*.jade','markup/**/*.jade']
		options:
			livereload:true
		tasks:['jade','notify:watch']

	scripts:
		files:['scripts/**/*.js']
		tasks:['rsync','jshint','notify:watch']

	stylesheets:
		files:['www/stylesheets/style.css']
		tasks:['scsslint','notify:watch']

	www:
		files:['www/stylesheets/**/*.css','www/**/*.html','www/images/**/*','www/scripts/**/*.js']
		options:
			nospawn:true
			livereload:true
