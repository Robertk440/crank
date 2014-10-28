module.exports=(grunt)->

	# Create load tasks
	require('load-grunt-tasks')(grunt,
		{

		}
	)
	#

	# Grunt Configuration
	grunt.initConfig

		# Compass
		compass:
			build:
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
					base:'build'
					hostname:'*'
					port:1337
		#

		# Image Minification
		imagemin:
			images:
				files:[
					cwd:'images/'
					dest:'build/images/'
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
						dest:'build'
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
					specs:'tests/**/*.js'
					vendor:['dependencies/jquery/dist/jquery.min.js']
				src:'scripts/scripts.js'

		#

		# Modernizr
		# Used for loading scripts
		modernizr:
			build:
				devFile:'dependencies/modernizr/modernizr.js'
				extra:
					'load':true
				outputFile:'dependencies/modernizr/modernizr-build.js'
				uglify:true

		# Notify
		notify_hooks:
			enabled:true

		notify:
			watch:
				options:
					title:'Task complete'
					message:'Build files successfully updated'

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
			build:
				options:
					dest:'build'
					src:'./'
			options:
				delete:true
				exclude:['build','node_modules','bowerrc','*.html','compass','views','package.json','stylesheets','Gruntfile.coffee','.gitignore','.editorconfig','.DS_Store','bower.json','readme.md','.git','.sass-cache']
				recursive:true
		#

		# Watch
		watch:
			application:
				files:['browser/*.xml','scripts/application/*.js','data/**/**/**/**/**/*.json','fonts/**']
				tasks:['rsync']

			build:
				files:['build/stylesheets/**/*.css','build/**/*.html','build/images/**/*','build/scripts/**/*.js']
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
				files:['build/stylesheets/style.css']
				tasks:['notify:watch']
		#

	#

	# Register Tasks
	grunt.registerTask 'clean',['compass:build','modernizr','rsync','import','jade','remove']
	grunt.registerTask 'default',['compass:build','modernizr','rsync','jade']
	grunt.registerTask 'deploy',['compass:build','rsync','jade','uglify']
	grunt.registerTask 'server',['connect','parallel','notify']
	grunt.registerTask 'test',['jasmine']
	#
