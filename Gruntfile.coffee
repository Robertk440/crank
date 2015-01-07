module.exports=(grunt)->

	require('time-grunt')(grunt)

	# Create load tasks using JIT Grunt
	require('load-grunt-config')(grunt,
		init:true
		jitGrunt:
			staticMappings:
				scsslint:'grunt-scss-lint'
	)
	#

	# Registered Tasks
	grunt.registerTask 'clean',['compass:www','modernizr','rsync','import','jade']
	grunt.registerTask 'default',['compass:www','modernizr','rsync','jade']
	grunt.registerTask 'deploy',['compass:www','rsync','jade','uglify']
	grunt.registerTask 'server',['connect','parallel','notify']
	grunt.registerTask 'specs',['jasmine','jshint','scsslint']
	#
