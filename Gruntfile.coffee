module.exports=(grunt)->

	# Create load tasks using JIT Grunt
	require('jit-grunt')(grunt)
	#

	# Grunt Configuration
	grunt.initConfig

		# Compass
		compass:
			www:
				options:
					config:'compass/config.rb'
			watch:
				options:
					config:'compass/config.rb'
					watch:true
		#

		# Connect
		connect:
			server:
				options:
					base:'www'
					hostname:'*'
					port:1337
		#

		# Image Minification
		imagemin:
			images:
				files:[
					cwd:'images/'
					dest:'www/images/'
					expand:true
					src:['**/*.{png,jpg,jpeg}']
				]
		#

		# Jade
		# Front end preprocessing, looks after compiling
		# all .jade files into .html
		jade:
			views:
				files:
					[
						cwd:'views/'
						dest:'www'
						ext:'.html'
						expand:true
						src:['**/**/**/**/*.jade']
					]
				options:
					basedir:'views'
					pretty:true
		#

		# Jasmine
		# Unit testing for JavaScript
		jasmine:
			tests:
				options:
					specs:'specs/**/*.js'
					vendor:['dependencies/jquery/dist/jquery.min.js']
				src:
					[
						'scripts/plugins/*.js',
						'scripts/scripts.js'
					]
		#

		# Modernizr
		# Used for loading scripts
		modernizr:
			www:
				devFile:'dependencies/modernizr/modernizr.js'
				extra:
					'load':true
				outputFile:'dependencies/modernizr/modernizr-www.js'
				uglify:true
		#

		# Notify
		notify_hooks:
			enabled:true

		notify:
			watch:
				options:
					title:'Task complete'
					message:'www files successfully updated'

			server:
				options:
					title:'Server started'
					message:'Server started at http://localhost:1337'
		#

		# Parallel
		parallel:
			development:
				options:
					grunt:true
					stream:true
				tasks:['compass:watch','watch']
		#

		# Sync
		rsync:
			www:
				options:
					dest:'www'
					src:'./'
			options:
				delete:true
				exclude:['www','node_modules','bowerrc','*.html','compass','views','package.json','stylesheets','Gruntfile.coffee','.gitignore','.editorconfig','.DS_Store','bower.json','readme.md','.git','.sass-cache']
				recursive:true
		#

		# Watch
		watch:
			application:
				files:['browser/*.xml','scripts/application/*.js','data/**/**/*.json','fonts/**']
				tasks:['rsync']

			www:
				files:['www/stylesheets/**/*.css','www/**/*.html','www/images/**/*','www/scripts/**/*.js']
				options:
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
		#

	#

	# Register Tasks
	grunt.registerTask 'clean',['compass:www','modernizr','rsync','import','jade']
	grunt.registerTask 'default',['compass:www','modernizr','rsync','jade']
	grunt.registerTask 'deploy',['compass:www','rsync','jade','uglify']
	grunt.registerTask 'server',['connect','parallel','notify']
	grunt.registerTask 'test',['jasmine']
	#
