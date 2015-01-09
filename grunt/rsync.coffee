module.exports=

	options:
		delete:true
		exclude:['www','node_modules','bowerrc','grunt','configuration','*.html','compass','markup','package.json','stylesheets','Gruntfile.coffee','.gitignore','.editorconfig','.DS_Store','bower.json','readme.md','.git','.sass-cache']
		recursive:true

	www:
		options:
			dest:'www'
			src:'source/'
