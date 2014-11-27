module.exports=

	application:
		files:['browser/*.xml','scripts/application/*.js','data/**/**/*.json','fonts/**']
		tasks:['rsync']

	www:
		files:['www/stylesheets/**/*.css','www/**/*.html','www/images/**/*','www/scripts/**/*.js']
		options:
			nospawn:true
			livereload:true

	images:
		files:['images/**/*.{jpg,png,jpeg}']
		tasks:['rsync','imagemin','notify:watch']

	jade:
		files:['components/*.jade','views/**/*.jade']
		options:
			livereload:true
		tasks:['jade','notify:watch']

	scripts:
		files:['scripts/**/*.js']
		tasks:['rsync','notify:watch']

	stylesheets:
		files:['www/stylesheets/style.css']
		tasks:['notify:watch']
