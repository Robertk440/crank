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

		# Dev Update
		devUpdate:
			all:
				options:
					reportUpdated:'false'
					updateType:'force'
		#

		# Image Minification
		imagemin:
			all:
				files:[
					cwd:'images/'
					dest:'build/images/'
					expand:true
					src:['**/*.{png,jpg,jpeg}']
				]
		#

		# Import
		import:
			scripts:
				files:
					[
						cwd:'scripts/',
						dest:'build/scripts/',
						expand:true
						src:['**/*.js']
					]
		#

		# Jade
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
			tasks:
				options:
					grunt:true
					stream:true
				tasks:['compass:watch','watch']
		#

		# Sync
		sync:
			application:
				files:[
					{
						cwd:'scripts/application'
						dest:'build/scripts/application'
						expand:true
						src:'**'
					}
				]

			browser:
				files:[
					{
						cwd:'config'
						dest:'build/config'
						expand:true
						src:'**'
					}
				]

			data:
				files:[
					cwd:'data'
					dest:'build/data'
					expand:true
					src:'**/**/**/**/*.json'
				]

			deps:
				files:[
					cwd:'dependencies'
					dest:'build/dependencies'
					expand:true
					src:'**'
				]

			extras:
				files:[
					{
						dest:'build/'
						expand:true
						src:['*.{png,ico,txt,xml}']
					}
				]

			fonts:
				files:[
					{
						cwd:'fonts'
						dest:'build/fonts'
						expand:true
						src:'**'
					}
				]

			images:
				files:[
					{
						cwd:'images'
						dest:'build/images'
						expand:true
						src:['**/*.{png,jpg,jpeg,gif}']
					}
				]

			require:
				files:[
					{
						cwd:'scripts'
						dest:'build/scripts'
						expand:true
						src:['require.js']
					}
				]

			scripts:
				files:[
					{
						cwd:'scripts'
						dest:'build/scripts'
						expand:true
						src:['plugins/*.js','polyfills/*.js','load.js','scripts.js','application.js']
					}
				]
		#

		# Uglify
		uglify:
			scripts:
				files:
					{
						'build/scripts/load-min.js':['build/scripts/load.js']
					}
		#

		# Watch
		watch:
			application:
				files:['scripts/application/*.js']
				tasks:['sync:application']

			browser:
				files:['browser/*.xml']
				tasks:['sync:browser']

			build:
				files:['build/stylesheets/**/*.css','build/**/*.html','build/images/**/*','build/scripts/**/*.js']
				options:
					livereload:true

			data:
				files:['data/**/**/**/**/**/*.json']
				tasks:['sync:data']

			fonts:
				files:['fonts/**']
				tasks:['sync:fonts','notify:watch']

			img:
				files:['images/**/*.{jpg,png,jpeg}']
				tasks:['sync:images','imagemin','notify:watch']

			jade:
				files:['components/*.jade','views/**/*.jade']
				tasks:['jade','notify:watch']

			scripts:
				files:['scripts/**/*.js']
				tasks:['sync:scripts','notify:watch']

			stylesheets:
				files:['build/stylesheets/style.css']
				tasks:['notify:watch']
		#

	#

	# Register Tasks
	grunt.registerTask 'clean',['compass:build','sync','import','jade','remove']
	grunt.registerTask 'default',['compass:build','sync','jade']
	grunt.registerTask 'deploy',['compass:build','sync','jade','uglify']
	grunt.registerTask 'server',['connect','parallel','notify']
	grunt.registerTask 'update',['devUpdate']
	#
